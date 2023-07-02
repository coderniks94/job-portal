import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { getTopeSearchedCompaniesData } from "../firebase/dbTransactions";
import { COMPANY_ID_URL_PARAM } from "../utils/constants";

export default function TopSearchedCompanies() {
	const [topSearchedCompanies, setTopSearchedCompanies] = useState([]);

	const getTopeSearchedCompanies = async function () {
		var result = await getTopeSearchedCompaniesData();
		setTopSearchedCompanies(result);
	}

	useEffect(() => {
		getTopeSearchedCompanies();
	}, []);
	return (
		<div className="mt-5">
			<h3>Top Searched Companies</h3>
			<Row xs={1} md={2} lg={3}>
				{topSearchedCompanies &&
					topSearchedCompanies.length > 0 &&
					topSearchedCompanies.map((company, index) => {
						return (
							<Col
								className="mt-2"
								key={company.id + "-" + index}>
								<Card>
									<Card.Body>
										<Card.Title>{company.name}</Card.Title>
										<Card.Subtitle className="mb-2 text-muted">
											{company['openPositions']} open positions
										</Card.Subtitle>
										<Card.Link
											href={
												"/jobs-list?"+COMPANY_ID_URL_PARAM + "=" +
												company.id
											}
											className="stretched-link"></Card.Link>
									</Card.Body>
								</Card>
							</Col>
						);
					})}
				<Col className="mt-2">
					<Card className="bg-dark text-white">
						<Card.Body>
							<Card.Title>
								Search for 'YOUR' dream company
							</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">
								{"1000+ open positions"}
							</Card.Subtitle>
							<Card.Link
								href="/jobs-list"
								className="stretched-link"></Card.Link>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
	);
}
