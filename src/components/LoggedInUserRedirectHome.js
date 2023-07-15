import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function LoggedInUserRedirectHome() {
    return (
        <Container className="mt-5"><h5>You are already logged in. Go back to <Link to="/">Home Page</Link></h5></Container>
    )
}