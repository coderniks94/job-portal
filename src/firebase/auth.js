import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./config"

// const auth = getAuth();

export async function signupUser(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error signing up user: ", errorMessage);
        return error;
    }
}

export async function loginUser(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Login success", userCredential);
        return userCredential.user;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
    }

    // signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    //     // Signed in 
    //     const user = userCredential.user;
    //     return user;
    //     // ...
    // })
    // .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    // });
}

export async function logoutUser() {
    try{
        await signOut(auth);
        return {
            status: "success",
            statusMessage: "Sign out successful"
        }
    } catch(error) {
        return {
            status: "failed",
            statusMessage: "Sign out failed"
        }
    }
    

    // signOut(auth).then(() => {
    //     // Sign-out successful.
    //     console.log("Sign out success");
    // }).catch((error) => {
    //     // An error happened.
    //     console.error("Sign out failed");
    // });
}

