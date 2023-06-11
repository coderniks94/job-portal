import { async } from "@firebase/util";
import { useEffect, useState } from "react";
import { Button, Container, Form, InputGroup, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getJobPostById } from "../firebase/dbTransactions";
import useQueryParams from "../hooks/useQueryParams";
import parse from 'html-react-parser';

export default function JobDetailPage() {
	const [showApplyJobFormModal, setShowApplyJobFormModal] = useState(false);
	const [jobPostData, setJobPostData] = useState();

	const { id } = useParams();

	console.log("job id", id);

	const getJobPostData = async function () {
		var data =  await getJobPostById(id);
		setJobPostData(data);
	};

	useEffect(() => {
		setTimeout(()=>{
			getJobPostData();
		},0);
	}, []);

	const handleApplyButtonClick = () => {
		setShowApplyJobFormModal(true);
	};
	const handleApplyFormClose = () => {
		setShowApplyJobFormModal(false);
	};

	const getApplyJobModalView = function () {
		return (
			<Modal show={showApplyJobFormModal} onHide={handleApplyFormClose}>
				<Modal.Header closeButton>
					<Modal.Title>Apply to job requisition</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="fullName">
							<Form.Label>Full Name</Form.Label>
							<Form.Control type="text" placeholder="John Doe" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="email">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="name@example.com" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="phone">
							<Form.Label>Contact no.</Form.Label>
							<Form.Control type="number" placeholder="+91 9999999999" />
						</Form.Group>
						<Form.Group controlId="resume" className="mb-3">
							<Form.Label>Upload your resume (doc/pdf)</Form.Label>
							<Form.Control type="file" />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleApplyFormClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleApplyFormClose}>
						Save Changes
					</Button>
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
								<h5>Company: {jobPostData.company.name}</h5>
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
