import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config"

// const auth = getAuth();

export async function signupUser(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
    }
}

export async function loginUser(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
    }

    // .then((userCredential) => {
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

