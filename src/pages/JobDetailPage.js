import { useState } from "react";
import { Button, Container, Form, InputGroup, Modal } from "react-bootstrap";

export default function JobDetailPage() {
	const [showApplyJobFormModal, setShowApplyJobFormModal] = useState(false);

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
							<Form.Control
								type="email"
								placeholder="name@example.com"
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="phone">
							<Form.Label>Contact no.</Form.Label>
							<Form.Control
								type="number"
								placeholder="+91 9999999999"
							/>
						</Form.Group>
						<Form.Group controlId="resume" className="mb-3">
							<Form.Label>
								Upload your resume (doc/pdf)
							</Form.Label>
							<Form.Control type="file" />
						</Form.Group>
						{/* <Form.Label htmlFor="full-name">Full Name</Form.Label>
				<InputGroup className="mb-3">
					<Form.Control id="full-name" aria-describedby="basic-addon3" />
				</InputGroup> */}
						{/* <Form.Label htmlFor="email">Email id</Form.Label>
				<InputGroup className="mb-3">
					<Form.Control id="email" aria-describedby="basic-addon3" />
				</InputGroup> */}
						{/* <Form.Label htmlFor="phone">Phone no.</Form.Label>
				<InputGroup className="mb-3">
					<Form.Control id="phone" aria-describedby="basic-addon3" />
				</InputGroup> */}
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
			<div className="bg-secondary bg-gradient pt-3 pb-3 text-light">
				<Container className="d-flex justify-content-between align-items-start">
					<div>
						<h2>Software engineer</h2>
						<h5>Company: ServiceNow</h5>
						<h5>
							Department: Engineering, Infrastructure and
							Operations
						</h5>
						<h5>Location: Hyderabad</h5>
						<h5>Req ID: 121212</h5>
						<h5>Work Persona: Required in office</h5>
					</div>
					<Button
						variant="primary"
						className="w-25"
						onClick={handleApplyButtonClick}>
						Apply
					</Button>

					{getApplyJobModalView()}
				</Container>
			</div>
			<Container className="mt-3">
				<h3>Company Description</h3>
				<p>
					At ServiceNow, our technology makes the world work for
					everyone, and our people make it possible. We move fast
					because the world can't wait, and we innovate in ways no one
					else can for our customers and communities. By joining
					ServiceNow, you are part of an ambitious team of change
					makers who have a restless curiosity and a drive for
					ingenuity. We know that your best work happens when you live
					your best life and share your unique talents, so we do
					everything we can to make that possible. We dream big
					together, supporting each other to make our individual and
					collective dreams come true. The future is ours, and it
					starts with you. With more than 7,400+ customers, we serve
					approximately 80% of the Fortune 500, and we're proud to be
					one of FORTUNE's 100 Best Companies to Work For® and World's
					Most Admired Companies® 2022. Learn more on Life at Now blog
					and hear from our employees about their experiences working
					at ServiceNow. Unsure if you meet all the qualifications of
					a job description but are deeply excited about the role? We
					still encourage you to apply! At ServiceNow, we are
					committed to creating an inclusive environment where all
					voices are heard, valued, and respected. We welcome all
					candidates, including individuals from non-traditional,
					varied backgrounds, that might not come from a typical path
					connected to this role. We believe skills and experience are
					transferrable, and the desire to dream big makes for great
					candidates.
				</p>

				<h3>Job Description</h3>
				<p>What you get to do in this role:</p>
				<ul>
					<li>
						Build high-quality, clean, scalable, and reusable code
						by enforcing best practices around software engineering
						architecture and processes (Code Reviews, Unit testing,
						etc.)
					</li>
					<li>
						Work with the product owners to understand detailed
						requirements and own your code from design,
						implementation, test automation and delivery of
						high-quality product to our users.
					</li>
					<li>
						Design software that is simple to use to allow customers
						to extend and customize the functionality to meet their
						specific needs
					</li>
					<li>
						Help design and implement new products and features
						while also enhancing the existing product suite
					</li>
				</ul>

				<h3>Qualifications</h3>
				<p>To be successful in this role you have:</p>
				<ul>
					<li>
						0-2+ years of experience with Java or a similar OO
						language
					</li>
					<li>
						Passion for JavaScript and the Web as a platform,
						reusability, and componentization
					</li>
					<li>
						Experience with data structures, algorithms,
						object-oriented design, design patterns, and
						performance/scale considerations
					</li>
					<li>
						Experience with any of the modern UI frameworks like
						Angular, React or Vue
					</li>
					<li>Analytical and design skills</li>
					<li>
						Working knowledge and ability to use tools to assist
						with daily tasks (IDE, debugger, build tools, source
						control, ServiceNow instances, profilers, system
						administration/Unix tools)
					</li>
				</ul>
				<h3>Additional Information</h3>
				<p>
					ServiceNow is an Equal Employment Opportunity Employer. All
					qualified applicants will receive consideration for
					employment without regard to race, color, creed, religion,
					sex, sexual orientation, national origin or nationality,
					ancestry, age, disability, gender identity or expression,
					marital status, veteran status or any other category
					protected by law. At ServiceNow, we lead with flexibility
					and trust in our distributed world of work. Click here to
					learn about our work personas: flexible, remote and
					required-in-office. If you require a reasonable
					accommodation to complete any part of the application
					process, or are limited in the ability or unable to access
					or use this online application process and need an
					alternative method for applying, you may contact us at
					talent.acquisition@servicenow.com for assistance. For
					positions requiring access to technical data subject to
					export control regulations, including Export Administration
					Regulations (EAR), ServiceNow may have to obtain export
					licensing approval from the U.S. Government for certain
					individuals. All employment is contingent upon ServiceNow
					obtaining any export license or other approval that may be
					required by the U.S. Government. Please Note: Fraudulent job
					postings/job scams are increasingly common. Click here to
					learn what to watch out for and how to protect yourself. All
					genuine ServiceNow job postings can be found through the
					ServiceNow Careers site.
				</p>
			</Container>
		</>
	);
}
