import { Button, Container } from "react-bootstrap";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { loginUser } from "../firebase/auth";
import LoggedInUserRedirectHome from "../components/LoggedInUserRedirectHome";

export default function GetStarted() {
    const { user } = useOutletContext();
    const navigate = useNavigate();
    const testUserEmail = "john.doe@example.com";
    const testRecruiterEmail = "brown.bag@testcompany.com";
    const testPassword = "password";

    function handletestUserLogin() {
        loginUser(testUserEmail, testPassword).then((response)=>{
            console.log("Login success for user:", response);
            // redirect("/");
            navigate("/");
        });
    }

    function handleTestRecruiterLogin() {
        loginUser(testRecruiterEmail, testPassword).then((response)=>{
            console.log("Login success for user:", response);
            // redirect("/");
            navigate("/");
        });
    }

    if(user && user.additionalDetails && user.additionalDetails.id) {
        return <LoggedInUserRedirectHome/>
    }

    return (
        <Container className="d-flex flex-column justify-content-start align-items-center border border-primary rounded mt-5 mb-5 w-25 p-5">
            <Button variant="link" className="d-block" onClick={handletestUserLogin}>Login as test user</Button>
            <Button variant="link" className="d-block" onClick={handleTestRecruiterLogin}>Login as test recruiter</Button>
            <Link to="/login" className="d-block">Login with actual credentials</Link>
        </Container>
    )
}