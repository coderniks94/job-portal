import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

export default function TopSearchedCompanies() {
    const [topSearchedCompanies, setTopSearchedCompanies] = useState([]);

    useEffect(() => {
        // fetch top searched companies
        setTopSearchedCompanies([
            {
                id: "1982012",
                companyName: "Amazon",
                openPositions: 89,
                companyJobsLink: "/jobs-list?company-id=1828912",
            },
            {
                id: "8230912",
                companyName: "Microsoft",
                openPositions: 77,
                companyJobsLink: "/jobs-list?company-id=1828912",
            },
            {
                id: "1309128",
                companyName: "Google",
                openPositions: 118,
                companyJobsLink: "/jobs-list?company-id=1828912",
            },
            {
                id: "1837911",
                companyName: "Salesforce",
                openPositions: 36,
                companyJobsLink: "/jobs-list?company-id=1828912",
            },
            {
                id: "91823901",
                companyName: "Netflix",
                openPositions: 237,
                companyJobsLink: "/jobs-list?company-id=1828912",
            },
            {
                id: "891734981",
                companyName: "Airbnb",
                openPositions: 256,
                companyJobsLink: "/jobs-list?company-id=1828912",
            },
        ]);
    }, []);
    return (
        <div className="mt-5">
            <h3>Top Searched Companies</h3>
            <Row xs={1} md={2} lg={3}>
                {topSearchedCompanies &&
                    topSearchedCompanies.map((company, index) => {
                        return (
                            <Col
                                className="mt-2"
                                key={company.id + "-" + index}
                            >
                                <Card>
                                    <Card.Body>
                                        <Card.Title>
                                            {company.companyName}
                                        </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            {company.openPositions +
                                                " open positions"}
                                        </Card.Subtitle>
                                        <Card.Link
                                            href={company.companyJobsLink}
                                            className="stretched-link"
                                        ></Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
            </Row>
        </div>
    );
}
