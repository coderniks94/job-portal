import { async } from "@firebase/util";
import { useEffect, useState } from "react";
import { Alert, Button, Container, Form, InputGroup, Modal } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getJobPostById } from "../firebase/dbTransactions";
import useQueryParams from "../hooks/useQueryParams";
import parse from 'html-react-parser';
import { getNewUuidV4 } from "../utils/uuidUtils";
import { serverTimestamp } from "firebase/firestore";
import { uploadFileToDirectory } from "../firebase/storageTransactions";
import { addDocumentsToCollection } from "../firebase/setupData";

export default function JobDetailPage() {
	const [showApplyJobFormModal, setShowApplyJobFormModal] = useState(false);
	const [jobPostData, setJobPostData] = useState();

	// default candidate id below needs to be set to logged in candidate
	const [jobApplication, setJobApplication] = useState({ id: getNewUuidV4(), jobDetail: { id: '', positionName: '', department: { id: '', name: '' }, location: { id: '', city: '', state: '', country: '' } }, candidateDetail: { id: getNewUuidV4(), name: '', email: '', contact: '', resumeLink: '' }, applyDate: serverTimestamp(new Date()) })
	const [formValidationError, setFormValidationError] = useState('');

	const { id } = useParams();

	console.log("job id", id);

	const getJobPostData = async function () {
		var data = await getJobPostById(id);
		setJobPostData(data);
		setJobApplication({ ...jobApplication, jobDetail: { ...jobApplication.jobDetail, id: data.id, positionName: data.positionName, department: data.department, location: data.location } });
	};

	useEffect(() => {
		console.log("jobApplication: ", jobApplication); // needs to be deleted later

		// TODO: check if user already exist then set user id as that or if user logged in then their user id
	}, [jobApplication]);

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
					<Form onSubmit={handleFormSubmit}>
						{/* disable if user logged in */}
						<Form.Group className="mb-3" controlId="fullName">
							<Form.Label>Full Name</Form.Label>
							<Form.Control type="text" placeholder="John Doe" name="name" value={jobApplication.candidateDetail.name} onChange={(e) => handleInputChange(e)} />
						</Form.Group>

						{/* disable if user logged in */}
						<Form.Group className="mb-3" controlId="email">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="name@example.com" name="email" value={jobApplication.candidateDetail.email} onChange={(e) => handleInputChange(e)} />
						</Form.Group>

						{/* disable if user logged in */}
						<Form.Group className="mb-3" controlId="phone">
							<Form.Label>Contact no.</Form.Label>
							<Form.Control type="number" placeholder="+91 9999999999" name="contact" value={jobApplication.candidateDetail.contact} onChange={(e) => handleInputChange(e)} />
						</Form.Group>

						{/* option to change resume if user logged in */}
						<Form.Group controlId="resume" className="mb-3">
							<Form.Label>Upload your resume (doc/pdf)</Form.Label>
							<Form.Control type="file" onChange={(e) => handleResumeUpload(e)} />
						</Form.Group>

						<Button variant="secondary" onClick={handleApplyFormClose}>
							Close
						</Button>
						<Button variant="primary" type="submit">
							Apply
						</Button>
						{formValidationError && <Alert variant={"danger"} className="mb-3">
							{formValidationError}
						</Alert>}
					</Form>
				</Modal.Body>
				<Modal.Footer>
					
				</Modal.Footer>
			</Modal>
		);
	};

	return (
		<>
			{jobPostData && (
				<>
					<div className="bg-secondary bg-gradient pt-3 pb-3 text-light">
						<Container className="d-flex justify-content-between align-items-start">
							<div>
								<h2>{jobPostData.positionName}</h2>
								<h5>Company: <Link to={"/company-details/" + jobPostData.company.id} className="link-light" target="_blank">{jobPostData.company.name}</Link></h5>
								<h5>Department: {jobPostData.department.name}</h5>
								<h5>Location: {jobPostData.location.city + ', ' + jobPostData.location.state + ', ' + jobPostData.location.country}</h5>
								<h5>Req ID: {jobPostData.id}</h5>
								<h5>Work Persona: {jobPostData.workPersona}</h5>
							</div>
							<Button variant="primary" className="w-25" onClick={handleApplyButtonClick}>
								Apply
							</Button>

							{getApplyJobModalView()}
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
