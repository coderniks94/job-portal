import { doc, getDoc, collection, query, where, getDocs, getCountFromServer, orderBy, limit } from "firebase/firestore";
import { firestore } from "./config";

const db = firestore;

export async function getTopeSearchedCompaniesData() {
	var q = query(collection(db, "companies"));

    var allCompanies = [];

	const querySnapshot = await getDocs(q);
	querySnapshot.forEach((doc) => {
        const {id, name} = doc.data();
        allCompanies.push({id, name});
	});

    for(var i=0;i<allCompanies.length;i++) {
        q = query(collection(db, "jobs"), where("company.id", "==", allCompanies[i].id));
        var snapshot = await getCountFromServer(q);
        allCompanies[i].openPositions = snapshot.data().count;
    }

    console.log("getTopeSearchedCompaniesData:", allCompanies);
    return allCompanies;
}

export async function getRecentJobPostsData() {
    var q = query(collection(db, "jobs"), orderBy('postedDate'), limit(10));
    const querySnapshot = await getDocs(q);
    var jobPosts = [];
	querySnapshot.forEach((doc) => {
        const {id, positionName, company, postedDate, location} = doc.data();
        jobPosts.push( {id, positionName, company, postedDate, location});
	});

    console.log("jobPosts:", jobPosts);
    return jobPosts;
}
