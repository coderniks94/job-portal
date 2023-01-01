import { Container } from "react-bootstrap";

export default function NotFoundPage() {
    return (
        <Container>
            <div className="vh-100">
                <h3>404 Error! Requested resource could not be found</h3>
            </div>
        </Container>
    );
}
