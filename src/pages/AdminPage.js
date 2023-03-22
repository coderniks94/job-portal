import { Button, Container } from "react-bootstrap";
import { addDocumentsToCollection } from "../firebase/setupData";
import companies from "../setupDataForDb/companies";
import departments from "../setupDataForDb/departments";
import officeLocations from "../setupDataForDb/officeLocations";
import roles from "../setupDataForDb/roles";
import users from "../setupDataForDb/users";

export default function AdminPage() {
    return (
		<Container>
			<Button variant="primary" className="w-25 mt-2">
				Generate All Data
			</Button>
			<br />
			<br />
			<Button
				variant="primary"
				className="w-25 mt-2"
				onClick={() => addDocumentsToCollection("users", users)}>
				Generate Users Data
			</Button>
			<br />
			<br />
			<Button
				variant="primary"
				className="w-25 mt-2"
				onClick={() => addDocumentsToCollection("companies", companies)}>
				Generate Companies Data
			</Button>
			<br />
			<br />
			<Button
				variant="primary"
				className="w-25 mt-2"
				onClick={() =>
					addDocumentsToCollection("departments", departments)
				}>
				Generate Departments Data
			</Button>
			<br />
			<br />
			<Button
				variant="primary"
				className="w-25 mt-2"
				onClick={() =>
					addDocumentsToCollection("officeLocations", officeLocations)
				}>
				Generate Office Locations Data
			</Button>
			<br />
			<br />
			<Button
				variant="primary"
				className="w-25 mt-2"
				onClick={() => addDocumentsToCollection("roles", roles)}>
				Generate Roles Data
			</Button>
		</Container>
	);
}