// company name 
// company admin
// hiring managers list
// list of my company jobs
// list and count of people who have applied to every job post

import { Button, Container } from "react-bootstrap";
import { isRecruiterDashboardVisible } from "../utils/userUtils";
import { useNavigate, useOutletContext } from "react-router-dom";
import NoAccess from "../components/NoAccess";
import CompanyDetails from "../components/CompanyDetails";
import { useEffect, useState } from "react";
import { getDocumentById, getFilteredJobPosts } from "../firebase/dbTransactions";
import JobPosts from "../components/JobPosts";

export default function RecruiterDashboardPage() {
    const { user } = useOutletContext();
    const navigate = useNavigate();

    const [companyData, setCompanyData] = useState();
    const [companyJobPosts, setCompanyJobPosts] = useState([]);

    async function fetchAndSetCompanyData(companyId) {
        const data = await getDocumentById("companies", companyId);
        setCompanyData(data);
    }

    async function fetchAndSetJobPostsByCompany(companyId) {
        const data = await getFilteredJobPosts([companyId]);
        setCompanyJobPosts(data);
    }

    useEffect(() => {
        const companyId = user?.additionalDetails?.company?.id;
        console.log("companyId", companyId);
        fetchAndSetCompanyData(companyId);
        fetchAndSetJobPostsByCompany(companyId);
    }, [])

    if (!isRecruiterDashboardVisible(user)) {
        return <NoAccess />
    }

    function handleClickRegisterCompany() {
        navigate("/register-company");
    }

    function handleClickCreateJobPost() {
        navigate("/new-job");
    }


    return (

        <Container>
            <h2>Recruiter Dashboard Page</h2>

            {!companyData && <>
                <h4>You do not have any company registered</h4>
                <Button variant="primary" onClick={handleClickRegisterCompany}>Register company</Button>
            </>}
            {companyData &&
                <>
                    <h3>Company Details</h3>
                    <CompanyDetails companyData={companyData} />
                    <div className="d-flex flex-row justify-content-between">
                        <h3>Company Job Posts</h3>
                        <Button onClick={handleClickCreateJobPost}>Create new job post</Button>
                    </div>

                    {!companyJobPosts || companyJobPosts.length == 0 &&
                        <p>No job posts yet</p>
                    }
                    <JobPosts jobPosts={companyJobPosts} />
                </>
            }

        </Container>
    )
}