// signup with company email
// signup as recruiter account or job seeker account

// {
//     "uid": "n4EF9f9mK3dFGQlFq6QLLiQBSIy2",
//     "email": "john.doe@example.com",
//     "emailVerified": false,
//     "isAnonymous": false,
//     "providerData": [
//         {
//             "providerId": "password",
//             "uid": "john.doe@example.com",
//             "displayName": null,
//             "email": "john.doe@example.com",
//             "phoneNumber": null,
//             "photoURL": null
//         }
//     ],
//     "stsTokenManager": {
//         "refreshToken": "APZUo0QwZAsdpVeZt8ujWb7bTliX34-MzVFnzwf52KuPCFNv-sIA131OgTZ8PpKLePkMO6LcGk8Pjtv9GvgmAWYW8MLhFku5Vsp4Q1sbrf9Z6lWh6OlpogpM1Byhd9OaOG_gF3JPW_lRHztCPqKfOLnVTrbU6gZdcmKksHBQB_XU4F9VJGVEWWQqaahXllArWMPc3BVfexiPmNUlTgRAtEemxpGWwVrhhQ",
//         "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImY5N2U3ZWVlY2YwMWM4MDhiZjRhYjkzOTczNDBiZmIyOTgyZTg0NzUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vam9iLXBvcnRhbC0xMjMiLCJhdWQiOiJqb2ItcG9ydGFsLTEyMyIsImF1dGhfdGltZSI6MTY4ODMyMzY2MiwidXNlcl9pZCI6Im40RUY5ZjltSzNkRkdRbEZxNlFMTGlRQlNJeTIiLCJzdWIiOiJuNEVGOWY5bUszZEZHUWxGcTZRTExpUUJTSXkyIiwiaWF0IjoxNjg4MzIzNjYyLCJleHAiOjE2ODgzMjcyNjIsImVtYWlsIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiam9obi5kb2VAZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Whtwsuih3WWEN9Nn4YZx94mSYLfzb-1veLOhoAMn9Lm67aQXgslc7Za6QwDzEdLw7Xo8359Gw9MF6HTHzF8UY-RqWIAex15q6EE3Fg2taBuJZ4i6_plNPmT7m77YW9oFZZGwuGxLRs-EL3ApP8MzIioDQp465pzkfc0FJ1s6GlL_TfJoSP6Tj0ehpua2KaG25-RUtIwQ12L-SgvUsLXbhN8ReJsbqKdVZPNyz2N6hfSVkJKvip28_Ecsc3WujTZ4dttkzSadkn3RGyXuhGFQyismGym2vQoLCN_XYoaFq_e9qmmyUBCYmjLcdU3HDKsuZ2yeiFcTp8fn4depVFmKQg",
//         "expirationTime": 1688327262774
//     },
//     "createdAt": "1688323662427",
//     "lastLoginAt": "1688323662427",
//     "apiKey": "AIzaSyCKmkLwSHYAyZmZFd3V7DPCTBxWSjRjFpU",
//     "appName": "[DEFAULT]"
// }

import { useEffect, useState } from "react";
import { Alert, Button, Container, Form, FormGroup, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { getNewUuidV4 } from "../utils/uuidUtils";
import { getAllDocsFromCollection } from "../firebase/dbTransactions";
import { signupUser } from "../firebase/auth";
import { addDocumentsToCollection } from "../firebase/setupData";

// full name, email, company, password, repeat password


export default function SignupPage() {
    const [signupDetails, setSignupDetails] = useState({ id: getNewUuidV4(), name: '', email: '', password:'', rpassword: '', company: { id: '', name: '' }, roles: [{ id: '', name: '' }] });
    const [signupAs, setSignupAs] = useState('job-seeker');
    const [allRoles, setAllRoles] = useState([]);
    const [formValidationError, setFormValidationError] = useState('');

    async function fetchAllRoles() {
        var data = await getAllDocsFromCollection("roles");
        setAllRoles(data);
    }

    useEffect(()=>{
        fetchAllRoles();
    }, [])

    useEffect(()=>{
        setSignupDetails({...signupDetails, roles: getAssignedRolesBySignupUser(signupAs)});
    }, [allRoles])

    useEffect(()=>{
        console.log("signupDetails: ", signupDetails)
    }, [signupDetails])

    function handleSignupAsChange(val) {
        setSignupAs(val);

        //TODO: set role later
        var assignedRoles = getAssignedRolesBySignupUser(val);
        setSignupDetails({...signupDetails, roles: assignedRoles});
    }

    function getAssignedRolesBySignupUser(val) {
        var assignedRoles = [];
        if(val == 'job-seeker') {
            assignedRoles = allRoles.filter((role)=>{
                return role.name == 'job-seeker'
            });
        } else {
            assignedRoles = allRoles.filter((role)=>{
                return role.name == 'hiring-manager' || role.name == 'company-admin'
            });
        }
        return assignedRoles;
    }

    async function handleFormSubmit(e) {
        e.preventDefault();
        const formValidation = validateFormData();
        if(formValidation.status == "error") {
            setFormValidationError(formValidation.errorMessage);
        } else {
            setFormValidationError('');
            console.log("Valid form");
            const user = await signupUser(signupDetails.email, signupDetails.password);
            console.log(user);
            addDocumentsToCollection("users", [{
                id: user.uid,
                email: user.email,
                name: signupDetails.name,
                roles: signupDetails.roles
            }]);
        }
    }

    function handleInputChange(e) {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        setSignupDetails({...signupDetails, [inputName]: inputValue});
    }

    function validateFormData() {
		if(!signupDetails.name) {
			return {
				status: "error",
				errorMessage: "Name is empty"
			}
		}

        if(!signupDetails.email) {
			return {
				status: "error",
				errorMessage: "Email is empty"
			}
		}

        if(!signupDetails.password) {
			return {
				status: "error",
				errorMessage: "Password is empty"
			}
		}

        if(!signupDetails.rpassword) {
			return {
				status: "error",
				errorMessage: "Retype Password is empty"
			}
		}

        if(signupDetails.password !== signupDetails.rpassword) {
			return {
				status: "error",
				errorMessage: "Password and Retype password dont match"
			}
		}

		return {
			status: "success"
		}
	}

    function getEmailHelpText() {
        return signupAs === 'job-seeker' ? 'Enter personal email id' : 'Enter company email id';
    }

    return (
        <Container className="d-flex justify-content-center align-items-center h-100">
            <Form className="border border-primary rounded w-50 m-5 p-3" onSubmit={handleFormSubmit}>
                <ToggleButtonGroup type="radio" value={signupAs} name="signupAsRadio" className="w-100" onChange={handleSignupAsChange} variant="dark">
                    <ToggleButton id="tbg-btn-1" value="recruiter" variant="light">
                        Signup as recruiter
                    </ToggleButton>
                    <ToggleButton id="tbg-btn-2" value="job-seeker" variant="light">
                        Signup as Job seeker
                    </ToggleButton>
                </ToggleButtonGroup>

                <FormGroup className="mt-3">
                    <Form.Label>Full name</Form.Label>
                    <Form.Control type="text" name="name" value={signupDetails.name} onChange={handleInputChange}></Form.Control>
                </FormGroup>

                <FormGroup className="mt-3">
                    <Form.Label>Email [{getEmailHelpText()}]</Form.Label>
                    <Form.Control type="email" name="email" value={signupDetails.email} onChange={handleInputChange}></Form.Control>
                </FormGroup>

                <FormGroup className="mt-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={signupDetails.password} onChange={handleInputChange}></Form.Control>
                </FormGroup>

                <FormGroup className="mt-3">
                    <Form.Label>Retype Password</Form.Label>
                    <Form.Control type="password" name="rpassword" value={signupDetails.rpassword} onChange={handleInputChange}></Form.Control>
                </FormGroup>

                {formValidationError && <Alert variant={"danger"} className="mb-3">
                    {formValidationError}
                </Alert>}

                <Button type="submit" className="w-100 mt-5">Signup</Button>
            </Form>

        </Container>
    )
}