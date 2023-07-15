import { async } from "@firebase/util";
import { useEffect, useState } from "react";
import { Alert, Button, Container, Form, InputGroup, Modal } from "react-bootstrap";
import { Link, useOutlet, useOutletContext, useParams } from "react-router-dom";
import { getAllApplicantsByJobId, getJobPostById, getUserApplicationsForJob } from "../firebase/dbTransactions";
import useQueryParams from "../hooks/useQueryParams";
import parse from 'html-react-parser';
import { getNewUuidV4 } from "../utils/uuidUtils";
import { serverTimestamp } from "firebase/firestore";
import { uploadFileToDirectory } from "../firebase/storageTransactions";
import { addDocumentsToCollection } from "../firebase/dbTransactions";
import { isUserJobSeeker, isViewApplicantsButtonVisible } from "../utils/userUtils";
import ApplyJobForm from "../components/ApplyJobForm";
import ApplicantsList from "../components/ApplicantsList";

export default function JobDetailPage() {
	const { user } = useOutletContext();
	const [showApplyJobFormModal, setShowApplyJobFormModal] = useState(false);
	const [showViewApplicantsModal, setShowViewApplicantsModal] = useState(false);
	const [jobPostData, setJobPostData] = useState();
	const [applicantsList, setApplicantsList] = useState([]);
	const [userAppliedToCurrentJob, setUserAppliedToCurrentJob] = useState(false);

	// default candidate id below needs to be set to logged in candidate
	const [jobApplication, setJobApplication] = useState({ id: getNewUuidV4(), jobDetail: { id: '', positionName: '', company: {id: '', name: ''}, department: { id: '', name: '' }, location: { id: '', city: '', state: '', country: '' } }, candidateDetail: { id: getNewUuidV4(), name: '', email: '', contact: '', resumeLink: '' }, applyDate: serverTimestamp(new Date()) })
	const [formValidationError, setFormValidationError] = useState('');

	const { id } = useParams();

	console.log("job id", id);

	const getJobPostData = async function () {
		var data = await getJobPostById(id);
		setJobPostData(data);
		setJobApplication({ ...jobApplication, jobDetail: {
			...jobApplication.jobDetail,
			id: data.id,
			positionName: data.positionName,
			department: data.department,
			location: data.location,
			postedDate: data.postedDate,
			company: {
				...jobApplication.jobDetail.company,
				id: data.company.id,
				name: data.company.name,
				companyLogoUrl: data.company.companyLogoUrl
			}
		}});
	};

	async function checkIfUserAppliedToCurrentJob() {
		if(jobPostData) {
			const userApplicationForCurrentJob = await getUserApplicationsForJob(user.additionalDetails.id, jobPostData.id);
			console.log("userApplicationForCurrentJob:",userApplicationForCurrentJob);
			if(userApplicationForCurrentJob.length > 0) {
				console.log("User applied to current job");
				setUserAppliedToCurrentJob(true);
			}
		}
	}

	const setJobApplicationCandidateDetail = function() {
		setJobApplication({...jobApplication, candidateDetail: {
			...jobApplication.candidateDetail,
			id: user.additionalDetails.id,
			name: user.additionalDetails.name,
			email: user.additionalDetails.email
		}})
	}

	useEffect(() => {
		console.log("jobApplication: ", jobApplication); // needs to be deleted later

	}, [jobApplication]);

	useEffect(()=>{
		if(user) {
			checkIfUserAppliedToCurrentJob()
			setJobApplicationCandidateDetail();
		}
	}, [user]);

	useEffect(() => {
		setTimeout(() => {
			getJobPostData();
		}, 0);
	}, []);

	const handleApplyButtonClick = () => {
		setShowApplyJobFormModal(true);
	};
	const handleApplyFormClose = () => {
		setShowApplyJobFormModal(false);
	};

	const fetchAndSetAllApplicants = async function() {
		const applicationsList = await getAllApplicantsByJobId(jobPostData.id);
		console.log("applicationsList:", applicationsList);
		setApplicantsList(applicationsList);
	}

	const handleViewApplicantsButtonClick = () => {
		fetchAndSetAllApplicants()
		setShowViewApplicantsModal(true);
	};

	const handleViewApplicantsModalClose = () => {
		setShowViewApplicantsModal(false);
	};

	function handleInputChange(e) {
		const inputName = e.target.name;
		const inputValue = e.target.value;
		setJobApplication({ ...jobApplication, candidateDetail: { ...jobApplication.candidateDetail, [inputName]: inputValue } });
	}

	function handleResumeUpload(e) {
		uploadFileToDirectory(e.target.files[0], "candidate_resumes").then((response) => {
			setJobApplication({ ...jobApplication, candidateDetail: { ...jobApplication.candidateDetail, resumeLink: response } });
		});
	}

	function handleFormSubmit(e) {
		e.preventDefault();
		const formValidation = validateFormData();
		if(formValidation.status == "error") {
			setFormValidationError(formValidation.errorMessage);
		} else {
			setFormValidationError('');
			console.log("Valid form");
			addDocumentsToCollection("jobApplications", [jobApplication]).then(() => {
				console.log("New job application added successfully");
				setShowApplyJobFormModal(false);
				setUserAppliedToCurrentJob(true);
			});
		}

	}

	function validateFormData() {
		if(!jobApplication.candidateDetail.name) {
			return {
				status: "error",
				errorMessage: "Candidate name is empty"
			}
		}

		if(!jobApplication.candidateDetail.email) {
			return {
				status: "error",
				errorMessage: "Candidate email is empty"
			}
		}

		if(!jobApplication.candidateDetail.contact) {
			return {
				status: "error",
				errorMessage: "Candidate contact is empty"
			}
		}

		if(!jobApplication.candidateDetail.resumeLink) {
			return {
				status: "error",
				errorMessage: "Candidate resume is empty"
			}
		}

		return {
			status: "success"
		}
	}

	const getApplyJobModalView = function () {
		return (
			<Modal show={showApplyJobFormModal} onHide={handleApplyFormClose}>
				<Modal.Header closeButton>
					<Modal.Title>Apply to job requisition</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<ApplyJobForm formValidationError={formValidationError} handleApplyFormClose={handleApplyFormClose} handleResumeUpload={handleResumeUpload} jobApplication={jobApplication} handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange} />
				</Modal.Body>
			</Modal>
		);
	};

	const getViewApplicantsModalView = function () {
		return (
			<Modal show={showViewApplicantsModal} onHide={handleViewApplicantsModalClose}>
				<Modal.Header closeButton>
					<Modal.Title>View all applicants</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<ApplicantsList applicantsList={applicantsList}/>
				</Modal.Body>
			</Modal>
		);
	};

	return (
		<>
			{jobPostData && (
				<>
					<div className="bg-dark bg-gradient pt-3 pb-3 text-light">
						<Container className="d-flex justify-content-between align-items-start">
							<div>
								<h2>{jobPostData.positionName}</h2>
								<h5>Company: <Link to={"/company-details/" + jobPostData.company.id} className="link-light" target="_blank">{jobPostData.company.name}</Link><i className="bi bi-box-arrow-up-right ms-1"></i></h5>
								<h5>Department: {jobPostData.department.name}</h5>
								<h5>Location: {jobPostData.location.city + ', ' + jobPostData.location.state + ', ' + jobPostData.location.country}</h5>
								<h5>Req ID: {jobPostData.id}</h5>
								<h5>Work Persona: {jobPostData.workPersona}</h5>
							</div>
							{isUserJobSeeker(user) && 
							<div className="d-flex flex-column w-25 justify-content-center align-items-center">
							<Button variant="success" className="w-100" onClick={handleApplyButtonClick} disabled={userAppliedToCurrentJob}>
								Apply
							</Button>
							{userAppliedToCurrentJob && <p>You have already applied to this position</p>}
							</div>
							}

							{isViewApplicantsButtonVisible(user) && <Button variant="success" className="w-25" onClick={handleViewApplicantsButtonClick}>
								View all applicants
							</Button>}

							{getApplyJobModalView()}
							{getViewApplicantsModalView()}
						</Container>
					</div>
					<Container className="mt-3">
						<h3>Company Description</h3>
						<p>
							{jobPostData.company.companyDescription}
						</p>

						<h3>Job Description</h3>
						<p>What you get to do in this role:</p>
						{parse(jobPostData.jobDescription.toString())}

						<h3>Qualifications</h3>
						<p>To be successful in this role you have:</p>
						{parse(jobPostData.qualifications)}
						<h3>Additional Information</h3>
						{parse(jobPostData.additionalInfo)}
					</Container>
				</>
			)}
		</>
	);
}
