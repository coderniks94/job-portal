import { Col, Container, InputGroup } from "react-bootstrap";
import SearchBox from "../components/SearchBox";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import CheckboxDropdown from "../components/CheckboxDropdown";
import PillboxList from "../components/PillboxList";
import MultiSelectDropdown from "../components/MultiSelectDropdown";
// import CheckboxDropdown2 from "../components/CheckboxDropdown2";

export default function JobListPage() {
	const [companies, setCompanies] = useState([
		{ id: "123", label: "Amazon", value: "amazon" },
		{ id: "234", label: "Google", value: "google" },
		{ id: "345", label: "Facebook", value: "fb" },
		{ id: "456", label: "Microsoft", value: "msft" },
		{ id: "567", label: "ServiceNow", value: "snow" },
	]);

	const [departments, setDepartments] = useState([
		{ id: "123", label: "Finance", value: "finance" },
		{ id: "234", label: "HR", value: "hr" },
		{ id: "345", label: "Technology", value: "tech" },
		{ id: "456", label: "Marketing", value: "marketing" },
		{ id: "567", label: "Support", value: "support" },
		{ id: "678", label: "UX Design", value: "ux" },
		{ id: "789", label: "Sales", value: "sales" },
	]);

	const [locations, setLocations] = useState([
		{ id: "123", label: "Addison, Texas", value: "txs" },
		{ id: "234", label: "Bangalore, Karnataka", value: "bglr" },
		{ id: "345", label: "Hyderabad, Telangana", value: "hyd" },
		{ id: "456", label: "Chicago, Illinois", value: "illn" },
		{ id: "567", label: "New Delhi, New Delhi", value: "ndl" },
		{ id: "678", label: "New York, New York", value: "nyc" },
		{ id: "789", label: "Los Angeles, California", value: "lac" },
	]);

	return (
		<Container >
			<SearchBox />
			<div className="d-flex">
				<div className="d-flex flex-column w-25">
					<MultiSelectDropdown
						items={companies}
						label={"Select Companies"}
					/>
					<hr/>
					<MultiSelectDropdown
						items={departments}
						label={"Select Departments"}
					/>
					<hr/>
					<MultiSelectDropdown
						items={locations}
						label={"Select Locations"}
					/>
				</div>

				{/* <button type="button" class="multiselect dropdown-toggle" data-bs-toggle="dropdown"><span class="multiselect-selected-text"></span></button> */}
			</div>
		</Container>
	);
}
