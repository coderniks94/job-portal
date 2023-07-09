import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function GetStarted() {
    return (
        <Container className="d-flex flex-column justify-content-start align-items-center border border-primary rounded mt-5 mb-5 w-25 p-5">
            <Button variant="link" className="d-block">Login as test user</Button>
            <Button variant="link" className="d-block">Login as test recruiter</Button>
            <Link to="/login" className="d-block">Login with actual credentials</Link>
        </Container>
    )
}