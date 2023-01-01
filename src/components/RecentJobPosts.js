import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function RecentJobPosts() {
    const [recentJobPosts, setRecentJobPosts] = useState([]);

    useEffect(() => {
        //fetch recent job posts
        setRecentJobPosts([
            {
                positionName: "Senior Sales Execuive",
                id: "12345",
                location: "Hyderabad, Telangana, India",
                postedDate: "Dec 26th, 2022",
                company: {
                    name: "Amazon",
                    id: "930139",
                },
            },
            {
                positionName: "Software Engineer",
                id: "10390123",
                location: "San Francisco, California, United States",
                postedDate: "Dec 20th, 2022",
                company: {
                    name: "Google",
                    id: "823921",
                },
            },
            {
                positionName: "Product Manager",
                id: "19283012",
                location: "Amsterdam, UK",
                postedDate: "Dec 26th, 2022",
                company: {
                    name: "Airbnb",
                    id: "38912",
                },
            },
            {
                positionName: "Engineering Manager",
                id: "2931893",
                location: "Amsterdam, UK",
                postedDate: "Dec 26th, 2022",
                company: {
                    name: "Netflix",
                    id: "38912",
                },
            },
            {
                positionName: "HR Business partner",
                id: "i298304293",
                location: "Amsterdam, UK",
                postedDate: "Dec 26th, 2022",
                company: {
                    name: "Amazon",
                    id: "38912",
                },
            },
            {
                positionName: "Associate Product Manager",
                id: "283913",
                location: "Amsterdam, UK",
                postedDate: "Dec 26th, 2022",
                company: {
                    name: "Salesforce",
                    id: "38912",
                },
            },
        ]);
    }, []);
    return (
        <div className="mt-5">
            <h3>Recent Job Posts</h3>
            {recentJobPosts.map((req) => {
                return (
                    <Card className="mt-2" key={req.id}>
                        <Card.Header className="d-flex">
                            <h5>{req.positionName}</h5>
                            <span className="ms-auto">
                                Posted on: {req.postedDate}
                            </span>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex">
                                <Card.Title>{req.company.name}</Card.Title>
                            </div>
                            <Card.Subtitle className="mb-2 text-muted">
                                {req.location}
                            </Card.Subtitle>
                            <Card.Link
                                href={"/jobs/" + req.id}
                                className="stretched-link"
                            ></Card.Link>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                );
            })}
            <div className="mt-3 mb-3 d-flex justify-content-end">
                <Link to="/jobs?sort-by=posted-date">
                    View all recent job posts
                </Link>
            </div>
        </div>
    );
}
