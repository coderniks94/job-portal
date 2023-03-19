import { useState } from "react";
import { Badge, Button, Form, FormControl, ListGroup } from "react-bootstrap";

export default function CheckboxList({
	items,
	setSelectedItemIds,
	searchLabel,
}) {
	const [searchTerm, setSearchTerm] = useState("");
	const [checkedItems, setCheckedItems] = useState([]);

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleItemCheck = (itemId) => {
		if (checkedItems.includes(itemId)) {
			var checkedItemIds = checkedItems.filter((id) => id !== itemId);
		} else {
			var checkedItemIds = [...checkedItems, itemId];
		}
		setCheckedItems(checkedItemIds);
		setSelectedItemIds(checkedItemIds);
	};

	const handleItemBadgeClose = (itemId) => {
		var checkedItemIds = checkedItems.filter((id) => id !== itemId);
		setCheckedItems(checkedItemIds);
		setSelectedItemIds(checkedItemIds);
		// setCheckedItems(checkedItems.filter((id) => id !== itemId));
	};

	const filteredItems = items.filter((item) =>
		item.label.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div>
			<div className="mb-2">
				{checkedItems.length > 0 && (
					<div className="mt-3">
						{checkedItems.map((itemId) => (
							<Badge key={itemId} pill className="mr-1">
								{/* {item.label} */}
								{
									items.find((item) => item.id === itemId)
										?.label
								}
								<span
									className="ms-2"
									role="button"
									onClick={() =>
										handleItemBadgeClose(itemId)
									}>
									&times;
								</span>
							</Badge>
						))}
					</div>
				)}
			</div>
			<Form>
				<FormControl
					type="text"
					placeholder={searchLabel ? searchLabel : "Search"}
					className="mb-3"
					value={searchTerm}
					onChange={handleSearch}
				/>
				{/* <ListGroup>
					{filteredItems.map((item) => (
						<ListGroup.Item key={item.id}>
							<Form.Check
								type="checkbox"
								label={item.label}
								checked={checkedItems.includes(item.id)}
								onChange={() => handleItemCheck(item.id)}
							/>
						</ListGroup.Item>
					))}
				</ListGroup> */}
                {filteredItems.map((item) => (
				<div key={item.id}>
					<Form.Check
                        id={item.id+'-'+item.value}
						type="checkbox"
						label={item.label}
						checked={checkedItems.includes(item.id)}
						onChange={() => handleItemCheck(item.id)}
					/>
				</div>
                ))}
			</Form>
		</div>
	);
}
