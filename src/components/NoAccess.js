import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NoAccess() {
    return (
        <Container>
            <h3>
                You do not have access to this page. Go to <Link to="/">Home Page</Link>
            </h3>
        </Container>
    )
}