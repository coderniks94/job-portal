// company name
// addresses
// offce locations
// company description
// company logo url
// company banner url

import { useEffect, useState } from "react";
import { Alert, Button, Container, Dropdown, Form, FormGroup, InputGroup } from "react-bootstrap";
import { getAllDocsFromCollection } from "../firebase/dbTransactions";
import CheckboxList from "../components/CheckboxList";
import { uploadFileToDirectory } from "../firebase/storageTransactions";
import { v4 as uuidv4 } from 'uuid';
import { addDocumentsToCollection } from "../firebase/setupData";
import { useNavigate, useOutletContext } from "react-router-dom";
import { getNewUuidV4 } from "../utils/uuidUtils";
import { isUserCompanyAdmin } from "../utils/userUtils";
import NoAccess from "../components/NoAccess";

export default function RegisterCompanyPage() {
    const { user } = useOutletContext();
    const [companyDetails, setCompanyDetails] = useState({ id: getNewUuidV4(), name: '', addresses: [], officeLocations: [], companyAdmin: { id: user.additionalDetails.id, name: user.additionalDetails.name, email: user.additionalDetails.email }, companyDescription: '', companyLogoUrl: '', companyBannerUrl: '' });
    const [officeAddressCount, setOfficeAddressCount] = useState(1);
    const [officeLocationCount, setOfficeLocationCount] = useState(1);
    const [formError, setFormError] = useState("");
    const [allOfficeLocations, setAllOfficeLocations] = useState([]);
    const navigate = useNavigate();

    const getAllOfficeLocations = async () => {
        var officeLocations = await getAllDocsFromCollection("officeLocations");
        officeLocations.forEach(function (location) {
            location.label = `${location.city}, ${location.state}, ${location.country}`
        })

        setAllOfficeLocations(officeLocations);
        console.log("all officeLocations:", officeLocations);
    };

    useEffect(function () {
        getAllOfficeLocations();
    }, [])

    // TODO: remove this later
    useEffect(function () {
        console.log("companyDetails: ", companyDetails);
    }, [companyDetails])

    const handleFormSubmit = function (event) {
        event.preventDefault();
        const formValidation = validateFormData();
        if (formValidation.status == "error") {
            setFormError(formValidation.errorMessage);
        } else {
            setFormError('');
            console.log("Valid form");
            user.additionalDetails.company = {
                id: companyDetails.id,
                name: companyDetails.name
            }
            addDocumentsToCollection("users", [user.additionalDetails]);
            addDocumentsToCollection("companies", [companyDetails]).then(()=>{
                navigate("/company-details/" + companyDetails.id);
            });
            
        }
        
    }

    const validateFormData = function () {
        if (!companyDetails.name) {
            return {
                status: "error",
                errorMessage: "Company name is empty"
            }
        }
        if (!companyDetails.addresses || companyDetails.addresses.length == 0) {
            return {
                status: "error",
                errorMessage: "Company address is empty"
            }
        }
        if (!companyDetails.officeLocations || companyDetails.officeLocations.length == 0) {
            return {
                status: "error",
                errorMessage: "Company locations is empty"
            }
        }
        if (!companyDetails.companyDescription) {
            return {
                status: "error",
                errorMessage: "Company description is empty"
            }
        }

        return {
            status: "success",
        }
    }

    const handleInputChange = function (e) {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        setCompanyDetails({ ...companyDetails, [fieldName]: fieldValue });
    }

    const handleCompanyAddressesChange = function (e, index) {
        var companyDetailsCopy = { ...companyDetails };
        companyDetailsCopy.addresses[index] = e.target.value;
        setCompanyDetails(companyDetailsCopy);
    }

    const handleLocationsSet = function (locationIds) {
        var companyDetailsCopy = { ...companyDetails };
        companyDetailsCopy.officeLocations = allOfficeLocations.filter((loc) => { return locationIds.includes(loc.id) });
        setCompanyDetails(companyDetailsCopy);
    }

    const handleLogoChange = function(e) {
        console.log(e.target.files[0]);
        uploadFileToDirectory(e.target.files[0], "company_logos").then((response)=>{
            setCompanyDetails({ ...companyDetails, companyLogoUrl: response });
        })
    }

    const handleBannerChange = function(e) {
        console.log(e.target.files[0]);
        uploadFileToDirectory(e.target.files[0], "company_banners").then((response)=>{
            setCompanyDetails({ ...companyDetails, companyLogoUrl: response });
        })
    }

    if(!isUserCompanyAdmin(user)) {
        return <NoAccess/>
    }


    return (
        <>
            <Container>
                <h3 className="mt-5 mb-3">
                    Register your Company
                </h3>
                {/* TODO: form should not load if user's company already exist. SHould redirect to company profile page */}
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group>
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control type="text" placeholder="eg. Amazon" name="name" onChange={(e) => handleInputChange(e)} value={companyDetails.name} />
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Label>Company Address</Form.Label>
                        {[...Array(officeAddressCount)].map((elementInArray, index) => (
                            <Form.Control as="textarea" key={index} placeholder="eg. 146, Boulevard St., Los Angeles, Califorina" onChange={(e) => handleCompanyAddressesChange(e, index)}></Form.Control>
                        ))}
                        <Button variant="link" onClick={() => { setOfficeAddressCount(officeAddressCount + 1) }}>Add new address</Button>
                        <Button variant="link" onClick={() => { setOfficeAddressCount(officeAddressCount > 1 && officeAddressCount - 1) }}>Remove last address</Button>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                Select Locations
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="w-25">
                                {/* <InputGroup className="m-3"> */}
                                <div className="m-3">
                                <CheckboxList items={allOfficeLocations} setSelectedItemIds={handleLocationsSet} selectedItems={companyDetails.officeLocations.map((loc) => { return loc.id })} className="m-3" />
                                </div>
                                
                                {/* </InputGroup> */}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Label>Company Description</Form.Label>
                        <Form.Control as="textarea" name="companyDescription" onChange={(e) => handleInputChange(e)} value={companyDetails.companyDescription} />
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb-3">
                        <Form.Label>Company Logo</Form.Label>
                        <Form.Control type="file" onChange={(e)=>{handleLogoChange(e)}}/>
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb-3">
                        <Form.Label>Company Banner (optional)</Form.Label>
                        <Form.Control type="file" onChange={(e) => { handleBannerChange(e) }} />
                    </Form.Group>
                    <br/>
                    <Button variant="primary" type="submit" className="mb-3">
                        Register Company
                    </Button>
                    <br/>

                    {formError && <Alert variant={"danger"} className="mb-3">
                        {formError}
                    </Alert>}

                </Form>
            </Container>
        </>
    )
}