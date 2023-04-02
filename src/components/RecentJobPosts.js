import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getRecentJobPostsData } from "../firebase/dbTransactions";
import JobPosts from "./JobPosts";

export default function RecentJobPosts() {
    const [recentJobPosts, setRecentJobPosts] = useState([]);

    const getRecentJobPosts = async function() {
        var result = await getRecentJobPostsData();
        console.log("recent job posts received result:", result);
        setRecentJobPosts(result);
    }

    useEffect(()=>{
        getRecentJobPosts();
    }, []);
    return (
        <div className="mt-5">
            <h3>Recent Job Posts</h3>
            <JobPosts jobPosts={recentJobPosts}/>
            <div className="mt-3 mb-3 d-flex justify-content-end">
                <Link to="/jobs-list?sort-by=posted-date">
                    View all recent job posts
                </Link>
            </div>
        </div>
    );
}
