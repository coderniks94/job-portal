import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PageFooter() {
    return (
        <footer className="bg-dark bg-gradient">
            <Container>
                <div className="pt-4 pb-5 d-flex">
                    <div className="w-100">
                        <Link
                            to="/home"
                            className="link-light text-decoration-none"
                        >
                            Home
                        </Link>
                        <br />
                        <Link
                            to="/home"
                            className="link-light text-decoration-none"
                        >
                            About
                        </Link>
                        <br />
                        <Link
                            to="/recruiter-start-page"
                            className="link-light text-decoration-none"
                        >
                            Recruiters start here
                        </Link>
                        <br />
                        <Link
                            to="/recruiter-start-page"
                            className="link-light text-decoration-none"
                        >
                            Job seekers start here
                        </Link>
                    </div>
                    <div className="w-100 d-flex flex-column align-items-end">
                        <InputGroup className="mb-3 w-75">
                            <Form.Control
                                placeholder="Email id"
                                aria-label="Enter your email id"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="secondary" id="button-addon2">
                                Subscribe to newsletter
                            </Button>
                        </InputGroup>

                        <div className="d-flex">
                            <Button variant="light ms-2">
                                <i className="bi bi-facebook"></i>
                            </Button>
                            <Button variant="light ms-2">
                                <i className="bi bi-instagram"></i>
                            </Button>
                            <Button variant="light ms-2">
                                <i className="bi bi-twitter"></i>
                            </Button>
                            <Button variant="light ms-2">
                                <i className="bi bi-youtube"></i>
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
