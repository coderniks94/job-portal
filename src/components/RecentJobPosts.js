import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getRecentJobPostsData } from "../firebase/dbTransactions";

export default function RecentJobPosts() {
    const [recentJobPosts, setRecentJobPosts] = useState([]);

    const getRecentJobPosts = async function() {
        var result = await getRecentJobPostsData();
        console.log("recent job posts received result:", result);
        // return result;
        setRecentJobPosts(result);
    }

    useEffect(()=>{
        getRecentJobPosts();
    }, []);
    return (
        <div className="mt-5">
            <h3>Recent Job Posts</h3>
            {recentJobPosts && recentJobPosts.length > 0 && recentJobPosts.map((req) => {
                console.log("req:", req);
                return (
                    <Card className="mt-2" key={req.id}>
                        <Card.Header className="d-flex">
                            <h5>{req.positionName}</h5>
                            <span className="ms-auto">
                            Posted on: {new Date(req.postedDate.seconds * 1000).toDateString()}
                            </span>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex">
                                <Card.Title>{req.company.name}</Card.Title>
                            </div>
                            <Card.Subtitle className="mb-2 text-muted">
                                {req.location.city}
                            </Card.Subtitle>
                            <Card.Link
                                href={"/job-detail/" + req.id}
                                className="stretched-link"
                            ></Card.Link>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                );
            })}
            <div className="mt-3 mb-3 d-flex justify-content-end">
                <Link to="/jobs-list?sort-by=posted-date">
                    View all recent job posts
                </Link>
            </div>
        </div>
    );
}
