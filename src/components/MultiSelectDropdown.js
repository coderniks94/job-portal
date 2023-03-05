import React, { useState } from "react";
import { Dropdown, Form, Badge } from "react-bootstrap";

function MultiSelectDropdown(props) {
	const [selectedValues, setSelectedValues] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	const handleCheckboxChange = (value) => {
		if (selectedValues.includes(value)) {
			setSelectedValues(selectedValues.filter((val) => val !== value));
		} else {
			setSelectedValues([...selectedValues, value]);
		}
	};

	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const handlePillboxClose = (value) => {
		setSelectedValues(selectedValues.filter((val) => val !== value));
	};

	const filteredItems = props.items.filter((item) =>
		item.label.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<>
			{selectedValues.length > 0 ? (
				<div style={{ display: "flex", flexWrap: "wrap" }}>
					{selectedValues.map((value) => (
						<Badge
							key={value}
							variant="primary"
							pill
							className="m-1">
							{
								props.items.find((item) => item.value === value)
									?.label
							}
							<span
                                className="ms-2"
                                role="button"
								onClick={() => handlePillboxClose(value)}>
								&times;
							</span>
						</Badge>
					))}
				</div>
			) : null}

			<Dropdown>
				<Dropdown.Toggle
					variant="outline-secondary"
					id="dropdown-basic"
					className="w-100 my-2">
					{props.label}
				</Dropdown.Toggle>

				<Dropdown.Menu className="w-100">
					<div className="mx-3 my-1">
						<Form.Control
							type="text"
							placeholder="Search..."
							value={searchTerm}
							onChange={handleSearchChange}
						/>
					</div>

					{filteredItems.map((item) => (
						<div className="mx-3 my-1" key={item.value}>
							<Form.Check
								type="checkbox"
								label={item.label}
								value={item.value}
								checked={selectedValues.includes(item.value)}
								onChange={() =>
									handleCheckboxChange(item.value)
								}
								id={`checkbox-${item.value}`}
							/>
						</div>
					))}
				</Dropdown.Menu>
			</Dropdown>
            
		</>
	);
}

export default MultiSelectDropdown;
