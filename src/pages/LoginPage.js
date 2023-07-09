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
import { loginUser, signupUser } from "../firebase/auth";
import { addDocumentsToCollection } from "../firebase/setupData";
import { Link, redirect, useNavigate } from "react-router-dom";

// full name, email, company, password, repeat password


export default function LoginPage() {
    const [formValidationError, setFormValidationError] = useState('');
    const [loginDetails, setLoginDetails] = useState({email: '', password: ''});

    const navigate = useNavigate();

    useEffect(()=>{
        console.log("loginDetails", loginDetails);
    }, [loginDetails])


    async function handleFormSubmit(e) {
        e.preventDefault();
        const formValidation = validateFormData();
        if(formValidation.status == "error") {
            setFormValidationError(formValidation.errorMessage);
        } else {
            setFormValidationError('');
            console.log("Valid form");
            loginUser(loginDetails.email, loginDetails.password).then((response)=>{
                console.log("Login success for user:", response);
                // redirect("/");
                navigate("/");
            });
        }
    }

    function handleInputChange(e) {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        setLoginDetails({...loginDetails, [inputName]: inputValue});
    }

    function validateFormData() {
		if(!loginDetails.email) {
			return {
				status: "error",
				errorMessage: "Email is empty"
			}
		}

        if(!loginDetails.password) {
			return {
				status: "error",
				errorMessage: "Password is empty"
			}
		}

		return {
			status: "success"
		}
	}

    return (
        <Container className="d-flex justify-content-center h-100">
            <Form className="border border-primary rounded w-50 m-5 p-3" onSubmit={handleFormSubmit}>
                <FormGroup className="mt-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={loginDetails.email} onChange={handleInputChange}></Form.Control>
                </FormGroup>

                <FormGroup className="mt-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={loginDetails.password} onChange={handleInputChange}></Form.Control>
                </FormGroup>

                {formValidationError && <Alert variant={"danger"} className="mb-3">
                    {formValidationError}
                </Alert>}

                <Button type="submit" className="w-100 mt-5">Login</Button>
                <div className="d-flex justify-content-center mt-3"><Link to="/signup">Don't have an account? Signup...</Link></div>
                
                {/* <Button variant="link">Don't have an account? Signup...</Button> */}
            </Form>

        </Container>
    )
}