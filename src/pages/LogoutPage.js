import { useEffect } from "react"
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { logoutUser } from "../firebase/auth";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function LogoutPage() {
    useEffect(() => {
        logoutUser().then((response)=>{
            console.log(response.statusMessage);
        })
    }, [])
    return (
        <Container className="mt-5">You have been logged out. Please go to <Link to="/login">Login</Link> page to login again or <Link to="/get-started">Explore with text credentials</Link></Container>
    )
}