import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import logo from "../resources/job-portal-logo-stretch.png"

const AboutPage = () => {
    return (
        <Container className="my-5">
            <Row>
                <Col md={4}>
                    <Image src={logo} className="w-100" />
                </Col>
                <Col md={8}>
                    <h2>About Us</h2>
                    <p>
                        One stop portal to find your next dream job in tech.
                        Whether you are a developer, product manager or managing a team of many,
                        you have come to the right spot to find your next dream job.
                    </p>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col md={4}>
                    <Card>
                        <Card.Header>
                            <h3>Our Mission</h3>
                        </Card.Header>
                        <Card.Body>
                            <p>
                                At [Job Portal Website], our mission is to empower individuals by connecting them with meaningful employment opportunities that align with their skills, passions, and ambitions. We strive to provide a user-friendly and comprehensive platform that simplifies the job search process, making it efficient and accessible for everyone. Through our dedication to quality, innovation, and continuous improvement, we aim to bridge the gap between talented professionals and leading companies, fostering mutually beneficial partnerships that drive success. We are committed to promoting diversity, equality, and inclusivity in the workforce, and to be a trusted resource for job seekers and employers alike. Together, let's transform the way people find and create fulfilling careers.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Header>
                            <h3>Our Vision</h3>
                        </Card.Header>
                        <Card.Body>
                            <p>
                                At [Job Portal Website], our vision is to empower individuals to discover and pursue their dream careers. We aim to revolutionize the job search process by providing an innovative and seamless platform that connects job seekers with their ideal opportunities. Through cutting-edge technology and data-driven insights, we strive to simplify recruitment for both candidates and employers, creating a world where talent meets opportunity effortlessly. We are committed to fostering a thriving community of professionals, fostering diversity and inclusion, and shaping the future of work. Join us on this transformative journey and unlock your full potential in a world of endless possibilities and let us guide you towards a future filled with endless opportunities and meaningful careers.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Header>
                            <h3>Our Values</h3>
                        </Card.Header>
                        <Card.Body>
                            <ul>
                                <li>Empowerment: We empower individuals with tools, resources, and support for career success.</li>
                                <li>Integrity: We uphold transparency, honesty, and fairness in all interactions.</li>
                                <li>Innovation: We provide a cutting-edge platform for an exceptional user experience.</li>
                                <li>Collaboration: We value teamwork, respect, and open communication for greater results.</li>
                                <li>Diversity and Inclusion: We promote equal opportunities and respect for all.</li>
                                <li>Customer-centricity: We prioritize users, exceeding expectations through exceptional service.</li>
                                <li>Continuous Improvement: We embrace learning and adapt to meet evolving needs.</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutPage;
