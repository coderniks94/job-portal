import { Alert, Button, Form } from "react-bootstrap"

export default function ApplyJobForm(props) {
    const {handleFormSubmit, jobApplication, handleResumeUpload, handleApplyFormClose, formValidationError, handleInputChange} = props
    return (
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

						<div className="d-flex justify-content-end">
							<Button variant="secondary" onClick={handleApplyFormClose} className="me-3">
								Close
							</Button>
							<Button variant="primary" type="submit">
								Apply
							</Button>
						</div>

						{formValidationError && <Alert variant={"danger"} className="mb-3">
							{formValidationError}
						</Alert>}
					</Form>
    )
}