import { doc, setDoc } from "firebase/firestore";

const { firestore } = require("./config");

const db = firestore;

/** needs id for each document mandatory */
export async function addDocumentsToCollection(collectionName, allData) {
	for (var i = 0; i < allData.length; i++) {
		const docRef = await setDoc(
			doc(db, collectionName, allData[i].id),
			allData[i]
		);
		console.log("Document written : ", docRef);
	}
}
