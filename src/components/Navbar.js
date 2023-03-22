import React from "react";
import { Link } from "react-router-dom";
import {
	Navbar,
	Nav,
	NavDropdown,
	Container,
	Image,
	Button,
} from "react-bootstrap";

const MyNavbar = () => {
	const getProfileMenuDropdownView = function () {
		return (
			<NavDropdown
				title={
					<>
						<Image
							src="/profile-picture.jpg"
							roundedCircle
							width="30"
							height="30"
							className="mr-2"
						/>
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
				<Navbar.Brand href="/">Job Portal</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="d-flex">
						<Nav.Link as={Link} to="/">
							Home
						</Nav.Link>
						<Nav.Link as={Link} to="/about">
							About
						</Nav.Link>
						<Nav.Link as={Link} to="/jobs-list">
							Jobs List
						</Nav.Link>
					</Nav>
					<Nav className="ms-auto">
						<Button variant="light" className="mr-2" size="sm">
							Get Started
						</Button>
						{/* {getProfileMenuDropdownView()} */}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default MyNavbar;
