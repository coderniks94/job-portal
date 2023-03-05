// import { observer } from "mobx-react-lite";

import React, { useState } from "react";
// import "./styles.css";

import {
	Button,
	ButtonGroup,
	Dropdown,
	DropdownButton,
	Form,
	InputGroup,
} from "react-bootstrap";

export default function CheckboxDropdown(props) {
	const { dropdownItems, dropdownLabel, handleChecked, uniqueType } = props;

	const [value, setValue] = useState("");

	const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
		// <a
		//     href=""
		//     ref={ref}
		//     onClick={(e) => {
		//         e.preventDefault();
		//         onClick(e);
		//     }}
		// >
		//     {children}
		//     &#x25bc;
		// </a>

		<InputGroup
			onClick={(e) => {
				e.preventDefault();
				onClick(e);
			}}>
			<Form.Control
				aria-label={dropdownLabel}
				placeholder={dropdownLabel}
				onChange={(e) => setValue(e.target.value)}
				value={value}
				autoFocus
			/>
			<InputGroup.Text>
				<i className="bi bi-search"></i>
			</InputGroup.Text>
			{/* <i class="bi bi-search"></i> */}
			{/* <div className='d-flex justify-content-between' >
             <InputGroup.Text>$</InputGroup.Text>
             </div> */}
		</InputGroup>
	));

	// forwardRef again here!
	// Dropdown needs access to the DOM of the Menu to measure it
	const CustomMenu = React.forwardRef(
		({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
			// const [value, setValue] = useState('');

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

	const CheckDropdownItem = React.forwardRef(
		({ children, id, checked, onChange }, ref) => {
			return (
				<Form.Group
					ref={ref}
					className="dropdown-item mb-0"
					controlId={id}>
					<Form.Check
						type="checkbox"
						label={children}
						checked={checked}
						onChange={onChange && onChange.bind(onChange, id)}
					/>
				</Form.Group>
			);
		}
	);

	return (
		<Dropdown autoClose="outside">
			<Dropdown.Toggle id="dropdown-custom-components" as={CustomToggle}>
				Custom toggle
			</Dropdown.Toggle>

			<Dropdown.Menu as={CustomMenu}>
				{dropdownItems.map((item, index) => {
					return (
						<Dropdown.Item
							as={CheckDropdownItem}
							eventKey={item.id}
							checked={item.checked}
							onChange={handleChecked}
							key={uniqueType+'-'+item.id+'-'+item.label}
							id={item.id}>
							{item.label}
						</Dropdown.Item>
					);
				})}
				{/* <Dropdown.Item as={CheckDropdownItem} eventKey="1">Red</Dropdown.Item>
                <Dropdown.Item as={CheckDropdownItem} eventKey="2">Blue</Dropdown.Item>
                <Dropdown.Item as={CheckDropdownItem} eventKey="3">
                    Orange
                </Dropdown.Item>
                <Dropdown.Item as={CheckDropdownItem} eventKey="4">Red-Orange</Dropdown.Item> */}
			</Dropdown.Menu>
		</Dropdown>
	);
	// const {
	// 	items,
	// 	handleSelectNone,
	// 	handleSelectAll,
	// 	handleChecked,
	// } = props;
	// const CheckboxMenu = React.forwardRef(
	// 	(
	// 		{
	// 			children,
	// 			style,
	// 			className,
	// 			"aria-labelledby": labeledBy,
	// 			onSelectAll,
	// 			onSelectNone,
	// 		},
	// 		ref
	// 	) => {
	// 		return (
	// 			<div
	// 				ref={ref}
	// 				style={style}
	// 				className={`${className} CheckboxMenu`}
	// 				aria-labelledby={labeledBy}>
	// 				<div
	// 					className="d-flex flex-column"
	// 					style={{ maxHeight: "calc(100vh)", overflow: "none" }}>
	// 					<ul
	// 						className="list-unstyled flex-shrink mb-0"
	// 						style={{ overflow: "auto" }}>
	// 						{children}
	// 					</ul>
	// 					<div className="dropdown-item border-top pt-2 pb-0">
	// 						{/* <ButtonGroup size="sm"> */}
	// 						<Button variant="link" onClick={onSelectAll}>
	// 							Select All
	// 						</Button>
	// 						<Button variant="link" onClick={onSelectNone}>
	// 							Select None
	// 						</Button>
	// 						{/* </ButtonGroup> */}
	// 					</div>
	// 				</div>
	// 			</div>
	// 		);
	// 	}
	// );

	// const CheckDropdownItem = React.forwardRef(
	// 	({ children, id, checked, onChange }, ref) => {
	// 		return (
	// 			// <Form.Group
	// 			// 	ref={ref}
	// 			// 	className="dropdown-item mb-0"
	// 			// 	controlId={id}>
	// 			// 	<Form.Check
	// 			// 		type="checkbox"
	// 			// 		label={children}
	// 			// 		checked={checked}
	// 			// 		onChange={onChange && onChange.bind(onChange, id)}
	// 			// 	/>
	// 			// </Form.Group>
	// 			<Form.Check
	// 				ref={ref}
	// 				type="checkbox"
	// 				label={children}
	// 				checked={checked}
	// 				onChange={onChange && onChange.bind(onChange, id)}
	// 				controlId={id}
	// 			/>
	// 		);
	// 	}
	// );

	// return (
	// 	<Dropdown>
	// 		<Dropdown.Toggle variant="primary" id="dropdown-basic">
	// 			Properties
	// 		</Dropdown.Toggle>

	// 		<Dropdown.Menu
	// 			as={CheckboxMenu}
	// 			onSelectAll={handleSelectAll}
	// 			onSelectNone={handleSelectNone}
	// 			autoClose="outside">
	// 			{items.map((i) => (
	// 				<Dropdown.Item
	// 					key={i.id}
	// 					as={CheckDropdownItem}
	// 					id={i.id}
	// 					checked={i.checked}
	// 					onChange={handleChecked}>
	// 					{i.label}
	// 				</Dropdown.Item>
	// 			))}
	// 		</Dropdown.Menu>

	// 		{/* <DropdownButton id="dropdown-item-button" title="Dropdown button">
	// 			<Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
	// 			<Dropdown.Item as="checkbox">Action</Dropdown.Item>
	// 			<Dropdown.Item as="checkbox">Another action</Dropdown.Item>
	// 			<Dropdown.Item as="checkbox">Something else</Dropdown.Item>
	// 		</DropdownButton> */}
	// 	</Dropdown>
	// );
}

// export default CheckboxDropdown;
