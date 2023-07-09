import { useContext, useEffect, useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { getDocumentById } from "../firebase/dbTransactions";
import Navbar from "../components/Navbar";
import MyNavbar from "../components/Navbar";
import PageFooter from "../components/PageFooter";

export default function AuthContext() {

    const [user, setUser] = useState(null);

    async function getUserAdditionalDetailsFromDb(user) {
        return await getDocumentById("users", user.uid);
    }

    useEffect(()=>{
        console.log("render AuthContext");
    })

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, function (authUser) {
            console.log("onAuthStateChanged called", authUser);
            if (authUser && !('additionalDetails' in authUser)) {
                getUserAdditionalDetailsFromDb(authUser).then((response) => {
                    authUser.additionalDetails = response;
                    setUser(authUser);
                });

            } else {
                console.log("User is signed out");
                setUser(null);
            }
        });
        return unsubscribe; // This will let it clean up when the AuthContext unmounts
    }, []);

    // below code doesnt work
    // useEffect(()=>{
    //     console.log("auth.currentUser changed", auth.currentUser);
    //     const currentUser = auth.currentUser;
    //     if (currentUser) {
    //         getUserAdditionalDetailsFromDb(currentUser).then((response) => {
    //             currentUser.additionalDetails = response;
    //             setUser(currentUser);
    //         });

    //     } else {
    //         console.log("User is signed out");
    //     }

    // },[auth.currentUser]);

    return <>
        <Outlet context={{ user }} />
    </>
}