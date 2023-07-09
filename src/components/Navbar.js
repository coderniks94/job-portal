import React from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import {
	Navbar,
	Nav,
	NavDropdown,
	Container,
	Image,
	Button,
} from "react-bootstrap";
import { isRecruiterDashboardVisible } from "../utils/userUtils";

const MyNavbar = (props) => {
	// const { user } = useOutletContext();
	const { user } = props;
	const navigate = useNavigate();
	console.log("Navbar:user", user);

	function handleGetStartedClick() {
		navigate("/get-started");
	}

	const getProfileMenuDropdownView = function () {
		return (
			<NavDropdown
				title={
					<>
						{/* <Image
							src="/profile-picture.jpg"
							roundedCircle
							width="30"
							height="30"
							className="mr-2"
						/> */}
						Profile
					</>
				}
				id="basic-nav-dropdown">
				<NavDropdown.Item as={Link} to="/profile">
					View Profile
				</NavDropdown.Item>
				<NavDropdown.Item as={Link} to="/settings">
					Settings
				</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item as={Link} to="/logout">
					Logout
				</NavDropdown.Item>
			</NavDropdown>
		);
	};
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container>
				<Link to="/" className="text-decoration-none"><Navbar.Brand>Job Portal</Navbar.Brand></Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="d-flex">
						<Nav.Link as={Link} to="/">
							Home
						</Nav.Link>
						{isRecruiterDashboardVisible(user) && <Nav.Link as={Link} to="/recruiter-dashboard">
							My Dashboard
						</Nav.Link>}
						<Nav.Link as={Link} to="/about">
							About
						</Nav.Link>
						<Nav.Link as={Link} to="/jobs-list">
							Jobs List
						</Nav.Link>
					</Nav>
					<Nav className="ms-auto">
						{!user && <Button variant="light" className="mr-2" size="sm" onClick={handleGetStartedClick}>
							Get Started
						</Button>}
						{user && getProfileMenuDropdownView()}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default MyNavbar;
