import { Col, Container, InputGroup } from "react-bootstrap";
import SearchBox from "../components/SearchBox";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
// import CheckboxDropdown from "../components/CheckboxDropdown";
import CheckboxDropdown2 from "../components/CheckboxDropdown2";

export default function JobListPage() {
	const [value, setValue] = useState("");
	const [field, setField] = useState([]);
	const [options, setOptions] = useState([
		{
			name: "Option 1",
			value: "option1",
		},
		{
			name: "Option 2",
			value: "option2",
		},
		{
			name: "Option 3",
			value: "option3",
		},
	]);

	const [companies, setCompanies] = useState([
		{ id: "123", label: "Amazon", checked: true },
		{ id: "234", label: "Google", checked: true },
		{ id: "345", label: "Facebook", checked: true },
		{ id: "456", label: "Microsoft", checked: true },
	]);

	const handleChecked = (key, event) => {
		console.log(event.target.checked);
		var itemsCopy = JSON.parse((JSON.stringify(companies)));
		var selectedItem = itemsCopy.find((i) => i.id === key);
		selectedItem.checked = !selectedItem.checked;
		console.log("itemsCopy:",itemsCopy);
		setCompanies(itemsCopy);
		console.log("items:",companies);
	};

	const handleSelectAll = () => {
		companies.forEach((i) => (i.checked = true));
	};

	const handleSelectNone = () => {
		companies.forEach((i) => (i.checked = false));
	};

	const onSelectedOptionsChange = function(e){
		console.log(e);
	}

	const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
		// <a
		// 	href=""
		// 	ref={ref}
		// 	onClick={(e) => {
		// 		e.preventDefault();
		// 		onClick(e);
		// 	}}>
		// 	{children}
		// 	&#x25bc;
		// </a>
		<Form.Control
			autoFocus
			className="mx-3 my-2 w-auto"
			ref={ref}
			onClick={(e) => {
				e.preventDefault();
				onClick(e);
			}}
			onChange={(e) => setValue(e.target.value)}
			value={value}
			placeholder="Type Company name"
			aria-label="Type Company name"
			aria-describedby="basic-addon2"
		/>
	));

	// forwardRef again here!
	// Dropdown needs access to the DOM of the Menu to measure it
	const CustomMenu = React.forwardRef(
		({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
			// const [value, setValue] = useState("");

			return (
				<div
					ref={ref}
					style={style}
					className={className}
					aria-labelledby={labeledBy}>
					{/* <Form.Control
						autoFocus
						className="mx-3 my-2 w-auto"
						placeholder="Type to filter..."
						onChange={(e) => setValue(e.target.value)}
						value={value}
					/> */}
					<ul className="list-unstyled">
						{React.Children.toArray(children).filter(
							(child) =>
								!value ||
								child.props.children
									.toLowerCase()
									.startsWith(value)
						)}
					</ul>
				</div>
			);
		}
	);

	return (
		<Container>
			<SearchBox />
			<div className="d-flex">
				<div className="w-25">
					{/* <Dropdown>
						<Dropdown.Toggle
							as={CustomToggle}
							id="dropdown-custom-components">
							Custom toggle
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item eventKey="1">Amazon</Dropdown.Item>
							<Dropdown.Item eventKey="2">Google</Dropdown.Item>
							<Dropdown.Item eventKey="3">
								Microsoft
							</Dropdown.Item>
							<Dropdown.Item eventKey="4">
								ServiceNow
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown> */}
				</div>
				{/* <Form.Group as={Col} controlId="my_multiselect_field">
					<Form.Label>My multiselect</Form.Label>
					<Form.Control
						as="select"
						multiple
						value={field}
						onChange={(e) =>
							setField(
								[].slice
									.call(e.target.selectedOptions)
									.map((item) => item.value)
							)
						}>
						<option value="field1">Field 1</option>
						<option value="field2">Field 2</option>
						<option value="field3">Field 3</option>
					</Form.Control>
				</Form.Group> */}

				{/* <div class="container mt-5">
					<select
						class="selectpicker"
						multiple
						aria-label="size 3 select example">
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
						<option value="4">Four</option>
					</select>
				</div> */}

				{/* <div>
					<button
						type="button"
						class="multiselect dropdown-toggle"
						data-bs-toggle="dropdown">
						<span class="multiselect-selected-text"></span>
					</button>
				</div> */}

				{/* <Form.Control
					as="select"
					multiple
					value={options}
					onChange={onSelectedOptionsChange}>
					{options.map((option) => (
						<option key={option.name} value={option.value}>
							{option.name}
						</option>
					))}
				</Form.Control> */}

				{/* <CheckboxDropdown
					items={items}
					handleChecked={handleChecked}
					handleSelectAll={handleSelectAll}
					handleSelectNone={handleSelectNone}
				/> */}
				<CheckboxDropdown2
					dropdownItems={companies}
					dropdownLabel={"Search Companies"}
					handleChecked={handleChecked}
				/>

				{/* <button type="button" class="multiselect dropdown-toggle" data-bs-toggle="dropdown"><span class="multiselect-selected-text"></span></button> */}
			</div>
		</Container>
	);
}
