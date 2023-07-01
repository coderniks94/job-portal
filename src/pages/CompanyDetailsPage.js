import { useEffect, useState } from "react"
import useQueryParams from "../hooks/useQueryParams"
import { Container } from "react-bootstrap";
import { getDocumentById, getFilteredJobPosts } from "../firebase/dbTransactions";
import JobPosts from "../components/JobPosts";

export default function CompanyDetailsPage() {
    const { getQueryParam } = useQueryParams();
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
        const companyId = getQueryParam("id");
        console.log("companyId", companyId);
        // getDocumentById("companies", companyId);
        fetchAndSetCompanyData(companyId);
        fetchAndSetJobPostsByCompany(companyId);
    }, [])
    return (

        <Container>
            {!companyData && <p>Loading...</p>}
            {companyData && <>
                <div className="d-flex flex-row mt-5 mb-3">
                    <img src={companyData.companyLogoUrl} width={100} height={100} />
                    <div className="d-flex flex-column ms-3">
                        <h3>{companyData.name}</h3>
                        <h5 className="mt-3">{companyData.companyDescription}</h5>
                    </div>
                </div>


                {companyData.companyAdmin?.name && <h5>Company admin: {companyData.companyAdmin.name}</h5>}

                <h5>Addresses:</h5>
                {companyData.addresses && companyData.addresses.length > 0 && companyData.addresses[0] && companyData.addresses.map((address) => {
                    return address;
                })}



                <h5 className="mt-3">Office Locations: </h5>
                {
                    companyData.officeLocations.map((loc) => {
                        return <p key={loc.id}>
                            {loc.label || `${loc.city}, ${loc.state}, ${loc.country}`}
                        </p>
                    })
                }

                <div className="mb-5 mt-5">
                <h5 className="mb-3">All Job Posts</h5>
                <JobPosts jobPosts={companyJobPosts}/>
                </div>
            </>}



        </Container>
    )
}