// import { observer } from "mobx-react-lite";

import React from "react";
// import "./styles.css";

import { Button, ButtonGroup, Dropdown, DropdownButton, Form } from "react-bootstrap";

export default function CheckboxDropdown(props) {
	const {
		items,
		handleSelectNone,
		handleSelectAll,
		handleChecked,
	} = props;
	const CheckboxMenu = React.forwardRef(
		(
			{
				children,
				style,
				className,
				"aria-labelledby": labeledBy,
				onSelectAll,
				onSelectNone,
			},
			ref
		) => {
			return (
				<div
					ref={ref}
					style={style}
					className={`${className} CheckboxMenu`}
					aria-labelledby={labeledBy}>
					<div
						className="d-flex flex-column"
						style={{ maxHeight: "calc(100vh)", overflow: "none" }}>
						<ul
							className="list-unstyled flex-shrink mb-0"
							style={{ overflow: "auto" }}>
							{children}
						</ul>
						<div className="dropdown-item border-top pt-2 pb-0">
							{/* <ButtonGroup size="sm"> */}
							<Button variant="link" onClick={onSelectAll}>
								Select All
							</Button>
							<Button variant="link" onClick={onSelectNone}>
								Select None
							</Button>
							{/* </ButtonGroup> */}
						</div>
					</div>
				</div>
			);
		}
	);

	const CheckDropdownItem = React.forwardRef(
		({ children, id, checked, onChange }, ref) => {
			return (
				// <Form.Group
				// 	ref={ref}
				// 	className="dropdown-item mb-0"
				// 	controlId={id}>
				// 	<Form.Check
				// 		type="checkbox"
				// 		label={children}
				// 		checked={checked}
				// 		onChange={onChange && onChange.bind(onChange, id)}
				// 	/>
				// </Form.Group>
				<Form.Check
					ref={ref}
					type="checkbox"
					label={children}
					checked={checked}
					onChange={onChange && onChange.bind(onChange, id)}
					controlId={id}
				/>
			);
		}
	);

	return (
		<Dropdown>
			<Dropdown.Toggle variant="primary" id="dropdown-basic">
				Properties
			</Dropdown.Toggle>

			<Dropdown.Menu
				as={CheckboxMenu}
				onSelectAll={handleSelectAll}
				onSelectNone={handleSelectNone}
				autoClose="outside">
				{items.map((i) => (
					<Dropdown.Item
						key={i.id}
						as={CheckDropdownItem}
						id={i.id}
						checked={i.checked}
						onChange={handleChecked}>
						{i.label}
					</Dropdown.Item>
				))}
			</Dropdown.Menu>

			{/* <DropdownButton id="dropdown-item-button" title="Dropdown button">
				<Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
				<Dropdown.Item as="checkbox">Action</Dropdown.Item>
				<Dropdown.Item as="checkbox">Another action</Dropdown.Item>
				<Dropdown.Item as="checkbox">Something else</Dropdown.Item>
			</DropdownButton> */}
		</Dropdown>
	);
}

// export default CheckboxDropdown;
