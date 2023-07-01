import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./config";

export async function uploadFileToDirectory(file, targetDir) {

    const storageRef = ref(storage, `${targetDir}/${file.name}`);

    // 'file' comes from the Blob or File API
    return uploadBytes(storageRef, file).then((snapshot) => {
        //https://firebasestorage.googleapis.com/v0/b/job-portal-prod.appspot.com/o/google_logo.jpeg?alt=media&token=7ee5de97-6ff5-4b60-9c6e-abef8bc474d3
        console.log('Uploaded snapshot ', snapshot);
        // return encodeURI("https://firebasestorage.googleapis.com/v0/b/"+snapshot.metadata.bucket+"/o/"+encodeURI(snapshot.metadata.fullPath)+"?alt=media")
        return getDownloadURL(snapshot.ref).then((downloadUrl)=>{
            return downloadUrl;
        })
    });
}