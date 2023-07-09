import JobPosts from "./JobPosts";

export default function CompanyDetails(props) {
    const {companyData} = props;

    return (
        <>
            {companyData && <>
                <h5>Logo</h5>
                    <img src={companyData.companyLogoUrl} width={100} height={100} />
                    <h5>Company Name: </h5>
                        <p>{companyData.name}</p>
                        <h5>Company Description:</h5>
                        <p className="mt-3">{companyData.companyDescription}</p>

                {companyData.companyAdmin?.name && 
                    <>
                        <h5>Company admin: </h5>
                        <p>{companyData.companyAdmin.name}</p>
                    </>
                }

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

                {/* {
                    companyJobPosts && companyJobPosts.length > 0 &&
                    <div className="mb-5 mt-5">
                        <h5 className="mb-3">All Job Posts</h5>
                        <JobPosts jobPosts={companyJobPosts} />
                    </div>
                } */}

            </>}
        
        </>
    )
}