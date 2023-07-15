import { useEffect, useState } from "react";
import { Button, Card, Container, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import { addDocumentsToCollection, getAllApplicationsByUserId } from "../firebase/dbTransactions";
// import JobPosts from "./components/JobPosts";
import JobPosts from "../components/JobPosts";
import { isUserJobSeeker } from "../utils/userUtils";

export default function UserProfilePage() {
    const { user } = useOutletContext();
    const [inputValues, setInputValues] = useState({ name: '', email: '' });
    const [positionsAppliedTo, setPositionsAppliedTo] = useState([]);
    console.log("user:", user);

    useEffect(() => {
        console.log("inputValues:", inputValues);
    }, [inputValues])

    async function fetchAndSetAppliedToPositions() {
        const allUserApplications = await getAllApplicationsByUserId(user.additionalDetails.id);
        console.log("allUserApplications:", allUserApplications);
        // console.log("filtered jobposts:", allUserApplications.map((pos) => { return pos.jobDetail}));
        setPositionsAppliedTo(allUserApplications);

    }

    useEffect(() => {
        if (user && user.additionalDetails) {
            // setInputValues({...inputValues, name: user.additionalDetails.name, email: user.additionalDetails.email});
            setInputValues(user.additionalDetails);
            fetchAndSetAppliedToPositions();
        }
    }, [user])

    function handleUserInputChange(e) {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        setInputValues({ ...inputValues, [inputName]: inputValue });
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        // addDocumentsToCollection("users", [inputValues]);
    }

    return (
        <Container>
            <h3 className="mt-5">My Profile</h3>
            {user && <Form onSubmit={handleFormSubmit}>
                <FormGroup className="mt-3">
                    <FormLabel>Name</FormLabel>
                    <FormControl disabled type="text" value={inputValues.name} name="name" onChange={handleUserInputChange}></FormControl>
                </FormGroup>
                <FormGroup className="mt-3 mb-3">
                    <FormLabel>Email</FormLabel>
                    <FormControl disabled type="email" value={inputValues.email} name="email" onChange={handleUserInputChange}></FormControl>
                </FormGroup>
                {/* <Button type="submit" className="mt-3 mb-5">Update</Button> */}
            </Form>}

            {/* TODO: Job positions applied to */}
            {isUserJobSeeker(user) && <>
                <h3 className="mt-5">Positions applied to</h3>

                <JobPosts jobPosts={positionsAppliedTo.map((pos) => { return pos.jobDetail })} />
            </>}


        </Container>
    )
}