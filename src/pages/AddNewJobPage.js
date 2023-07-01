import { Button, Container, Form } from "react-bootstrap";

const AddNewJobPage = () => {
	return (
		<>
			<Container>
				<Form>
					<Form.Group className="mb-3" controlId="formPositionName">
						<Form.Label>Position name</Form.Label>
						<Form.Control type="text" placeholder="Enter position name" />
						{/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
					</Form.Group>

                    <Form.Group className="mb-3" controlId="formPositionName">
						<Form.Label>Position name</Form.Label>
						<Form.Control type="text" placeholder="Enter position name" />
						{/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Check me out" />
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</Container>
		</>
	);
};

export default AddNewJobPage;
