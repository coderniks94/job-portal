import { Card } from "react-bootstrap";

export default function JobPosts(props) {
	const { jobPosts } = props;

    // return (
    //     <>
    //         {jobPosts.map((req)=>{
    //             return
    //         })}
    //     </>
    // )

	return (
		<>
			{jobPosts.map((req) => {
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
							href={"/job-detail/" + req.id}
							className="stretched-link"></Card.Link>
						{/* <Button variant="primary">Go somewhere</Button> */}
					</Card.Body>
				</Card>
				);
			})}
		</>
	);
}
