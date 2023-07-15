import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ApplicantsList(props) {
    const { applicantsList } = props;
    return (
        applicantsList.map((applicant, index)=>{
            return <div key={applicant.id || index}>
                <Card>
                    <Card.Header>{applicant.candidateDetail.name}</Card.Header>
                    <Card.Body>
                        Contact: {applicant.candidateDetail.contact}
                        <div>Email: {applicant.candidateDetail.email}</div>
                        {/* <Link to={applicant.candidateDetail.resumeLink} className="d-block">Download resume</Link> */}
                        <a href={applicant.candidateDetail.resumeLink} download target="_blank">View resume</a>
                    </Card.Body>
                </Card>
            </div>
        })
    )
}