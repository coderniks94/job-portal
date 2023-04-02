import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "../styles/styles.css";

export default function JobPosts(props) {
	const { jobPosts } = props;

	return (
		<>
			{jobPosts &&
				jobPosts.length > 0 &&
				jobPosts.map((req) => {
					return (
						<Card className="mt-2 " key={req.id}>
							<Card.Header className="d-flex">
								<h5>{req.positionName}</h5>
								<span className="ms-auto">
									Posted on:{" "}
									{new Date(
										req.postedDate.seconds * 1000
									).toDateString()}
								</span>
							</Card.Header>
							<div className="d-flex">
								<Image
									src={req.company.companyLogoUrl}
									rounded={true}
									className="job-tile-logo mt-3 ms-3"
								/>
								<Card.Body>
									<div className="d-flex">
										<Card.Title>
											{req.company.name}
										</Card.Title>
									</div>
									<Card.Subtitle className="mb-2 text-muted">
										{req.location.city}
									</Card.Subtitle>
									<Card.Link
										href={"/job-detail/" + req.id}
										className="stretched-link"></Card.Link>
									{/* <Button variant="primary">Go somewhere</Button> */}
								</Card.Body>
							</div>
						</Card>
					);
				})}
		</>
	);
}
