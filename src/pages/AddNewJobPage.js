import { useEffect, useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
import { getAllDocsFromCollection, getDocumentById } from "../firebase/dbTransactions";
import { serverTimestamp } from "firebase/firestore";
import { addDocumentsToCollection } from "../firebase/dbTransactions";
import { useNavigate, useOutletContext } from "react-router-dom";
import { isUserCompanyAdmin } from "../utils/userUtils";
import NoAccess from "../components/NoAccess";

const AddNewJobPage = () => {
	const { user } = useOutletContext();
	const [newJobDetails, setNewJobDetails] = useState({ id: uuidv4().split('-')[4], company: {id: "select"}, additionalInfo: '', department: {id: "select"}, jobDescription: '', location: {id: "select"}, positionName: '', postedDate: serverTimestamp(new Date()), qualifications: '', status: 'Open', workPersona: 'Flexible', postedBy: user.additionalDetails })
	const [allCompanies, setAllCompanies] = useState([]);
	const [allDepartments, setAllDepartments] = useState([]);
	const [allLocations, setAllLocations] = useState([]);
	const [formValidationError, setFormValidationError] = useState('');
	// const [selectedCompany, setSelectedCompany] = useState({});

	const navigate = useNavigate();

	async function fetchAllCompanies() {
		var data = [];
		if(user && user.additionalDetails?.company?.id) {
			data = [await getDocumentById("companies", user.additionalDetails.company.id)];
		} else {
			data = await getAllDocsFromCollection("companies");
		}
		
		console.log("all companies:", data);
		setAllCompanies(data);
		const defaultCompany = getFilteredCompanyProperties(data[0]);
		setNewJobDetails({...newJobDetails, company: defaultCompany, location: data[0].officeLocations[0]});
		setAllLocations(data[0].officeLocations);
	}

	async function fetchAllDepartments() {
		const data = await getAllDocsFromCollection("departments");
		console.log("all departments:", data);
		setAllDepartments(data);
		setNewJobDetails({...newJobDetails, department: data[0]})
	}

	function getFilteredCompanyProperties(company){
		const {id, name, companyLogoUrl, companyDescription} = company;
		return {id, name, companyDescription, companyLogoUrl};
	}

	function fetchAllData() {
		fetchAllCompanies();
		fetchAllDepartments();
	}

	useEffect(()=>{
		fetchAllData();
	}, [user]);

	useEffect(()=>{
		console.log("newJobDetails: ",newJobDetails)
	}, [newJobDetails])

	function handleInputChange(e) {
		var inputName = e.target.name;
		var inputValue = e.target.value;
		if(inputName == "company") {
			var selectedCompany = allCompanies.filter((com)=>{
				return com.id === e.target.value;
			})[0];
			inputValue = getFilteredCompanyProperties(selectedCompany);
		}
		if(inputName == "department") {
			var selectedDep = allDepartments.filter((dep)=>{
				return dep.id === e.target.value;
			})[0];
			inputValue = selectedDep;
		}
		if(inputName == "location") {
			var selectedLoc = allLocations.filter((loc)=>{
				return loc.id === e.target.value;
			})[0];
			inputValue = selectedLoc;
		}
		setNewJobDetails({...newJobDetails, [inputName]: inputValue})
	}

	function handleFormSubmit(e) {
		e.preventDefault();
		var formValidation = validateFormData();
		if(formValidation.status == 'error') {
			setFormValidationError(formValidation.errorMessage);
		} else {
			setFormValidationError('');
			console.log("Valid form");
            addDocumentsToCollection("jobs", [newJobDetails]).then(()=>{
                console.log("New job added successfully");
				navigate("/job-detail/" + newJobDetails.id);
            });
		}

	}

	function validateFormData() {
		if(!newJobDetails.additionalInfo) {
			return {
				status: "error",
				errorMessage: "Additional info is empty"
			}
		}

		if(!newJobDetails.jobDescription) {
			return {
				status: "error",
				errorMessage: "Job Description is empty"
			}
		}

		if(!newJobDetails.positionName) {
			return {
				status: "error",
				errorMessage: "Position name is empty"
			}
		}

		if(!newJobDetails.qualifications) {
			return {
				status: "error",
				errorMessage: "Qualifications is empty"
			}
		}

		if(!newJobDetails.workPersona) {
			return {
				status: "error",
				errorMessage: "Work Persona is empty"
			}
		}

		if(!newJobDetails.company || !newJobDetails.company.id || newJobDetails.company.id == "select") {
			return {
				status: "error",
				errorMessage: "Company not selected"
			}
		}

		if(!newJobDetails.department || !newJobDetails.department.id || newJobDetails.department.id == "select") {
			return {
				status: "error",
				errorMessage: "Department not selected"
			}
		}

		if(!newJobDetails.location || !newJobDetails.location.id || newJobDetails.location.id == "select") {
			return {
				status: "error",
				errorMessage: "Location not selected"
			}
		}

		return {
			status: "success"
		}
	}

	if(!isUserCompanyAdmin(user)) {
		return <NoAccess/>
	}

	return (
		<>
			<Container>
				<h3 className="mt-5">Create new job post</h3>
				<Form onSubmit={handleFormSubmit}>
					<Form.Group className="mt-3 mb-3">
						<Form.Label>Company</Form.Label>
						<Form.Select aria-label="Select Company" name="company" value={newJobDetails.company.id} onChange={(e)=>{handleInputChange(e)}}>
							<option value="select" key="select">--Select Company--</option>
							{allCompanies.map((com)=>{
								return <option value={com.id} key={com.id}>{com.name}</option>
							})}
						</Form.Select>
					</Form.Group>

					<Form.Group className="mt-3 mb-3">
						<Form.Label>Location</Form.Label>
						<Form.Select aria-label="Select Location" name="location" value={newJobDetails.location.id} onChange={(e)=>{handleInputChange(e)}}>
							<option value="select" key="select">--Select Location--</option>
							{allLocations.map((loc)=>{
								return <option value={loc.id} key={loc.id}>{`${loc.city}, ${loc.state}, ${loc.country}`}</option>
							})}
						</Form.Select>
					</Form.Group>
					
					<Form.Group className="mb-3" controlId="formPositionName">
						<Form.Label>Position name</Form.Label>
						<Form.Control name="positionName" type="text" placeholder="Enter position name" value={newJobDetails.positionName} onChange={(e)=>handleInputChange(e)}/>
						{/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
					</Form.Group>

					<Form.Group className="mt-3 mb-3">
						<Form.Label>Department</Form.Label>
						<Form.Select aria-label="Select Department" name="department" value={newJobDetails.department.id} onChange={(e)=>{handleInputChange(e)}}>
							<option value="select" key="select">--Select Department--</option>
							{allDepartments.map((dep)=>{
								return <option value={dep.id} key={dep.id}>{dep.name}</option>
							})}
						</Form.Select>
					</Form.Group>

                    <Form.Group className="mb-3" controlId="formWorkPersona">
						<Form.Label>Work persona</Form.Label>
						<Form.Control type="text" placeholder="eg. Flexible, Remote, In Office" name="workPersona" value={newJobDetails.workPersona} onChange={(e)=>handleInputChange(e)} />
						{/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
					</Form.Group>

					<Form.Group className="mb-3" controlId="formJobDesc">
						<Form.Label>Job Description (HTML text)</Form.Label>
						<Form.Control as="textarea" name="jobDescription" value={newJobDetails.jobDescription} onChange={(e)=>handleInputChange(e)} />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formQualifications">
						<Form.Label>Qualifications (HTML text)</Form.Label>
						<Form.Control as="textarea" name="qualifications" value={newJobDetails.qualifications} onChange={(e)=>handleInputChange(e)} />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formAdditionalInfo">
						<Form.Label>Additional Info (HTML text)</Form.Label>
						<Form.Control as="textarea" name="additionalInfo" value={newJobDetails.additionalInfo} onChange={(e)=>handleInputChange(e)} />
					</Form.Group>

					<Button variant="primary" type="submit">
						Submit
					</Button>

					{formValidationError && <Alert variant={"danger"} className="mb-3">
                        {formValidationError}
                    </Alert>}
				</Form>
			</Container>
		</>
	);
};

export default AddNewJobPage;
