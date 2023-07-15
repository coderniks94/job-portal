import { Button, Container } from "react-bootstrap";
import { addDocumentsToCollection } from "../firebase/dbTransactions";
import companies from "../setupDataForDb/companies";
import departments from "../setupDataForDb/departments";
import jobs from "../setupDataForDb/jobs";
import officeLocations from "../setupDataForDb/officeLocations";
import roles from "../setupDataForDb/roles";
import users from "../setupDataForDb/users";
import { useOutletContext } from "react-router-dom";
import { isUserAdmin } from "../utils/userUtils";
import NoAccess from "../components/NoAccess";

export default function AdminPage() {
	const { user } = useOutletContext();
	if(!isUserAdmin(user))
		return <NoAccess/>
		
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
			<br />
			<br />
			<Button
				variant="primary"
				className="w-25 mt-2"
				onClick={() => addDocumentsToCollection("jobs", jobs)}>
				Generate Jobs Data
			</Button>
		</Container>
	);
}