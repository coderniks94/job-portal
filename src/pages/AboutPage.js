import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";

const AboutPage = () => {
    return (
        <Container className="my-5">
            <Row>
                <Col md={4}>
                    <Image src="/logo.png" roundedCircle />
                </Col>
                <Col md={8}>
                    <h2>About Us</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam venenatis, tellus et pharetra dictum, ante velit
                        aliquet arcu, sed gravida ipsum odio et orci.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Header>
                            <h3>Our Mission</h3>
                        </Card.Header>
                        <Card.Body>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam venenatis, tellus et
                                pharetra dictum, ante velit aliquet arcu, sed
                                gravida ipsum odio et orci.
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
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam venenatis, tellus et
                                pharetra dictum, ante velit aliquet arcu, sed
                                gravida ipsum odio et orci.
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
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam venenatis, tellus et
                                pharetra dictum, ante velit aliquet arcu, sed
                                gravida ipsum odio et orci.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutPage;
