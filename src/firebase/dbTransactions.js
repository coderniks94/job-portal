import { async } from "@firebase/util";
import { doc, getDoc, collection, query, where, getDocs, getCountFromServer, orderBy, limit, setDoc } from "firebase/firestore";
import { firestore } from "./config";

const db = firestore;

export async function getTopeSearchedCompaniesData() {
    var q = query(collection(db, "companies"));

    var allCompanies = [];

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        const { id, name, companyLogoUrl } = doc.data();
        allCompanies.push({ id, name, companyLogoUrl });
    });

    for (var i = 0; i < allCompanies.length; i++) {
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
        const { id, positionName, company, postedDate, location } = doc.data();
        jobPosts.push({ id, positionName, company, postedDate, location });
    });

    console.log("jobPosts:", jobPosts);
    return jobPosts;
}

export async function getAllDocsFromCollection(collectionName) {
    var q = query(collection(db, collectionName));

    var allDocs = [];

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // const {id, name} = doc.data();
        allDocs.push(doc.data());
    });
    return allDocs;
}

export async function getAllApplicantsByJobId(jobId) {
    if(!jobId) return [];
    var q = query(collection(db, "jobApplications"), where("jobDetail.id", "==", jobId));

    var allDocs = [];

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // const {id, name} = doc.data();
        allDocs.push(doc.data());
    });
    return allDocs;
}

export async function getAllApplicationsByUserId(userId) {
    if(!userId) return [];
    var q = query(collection(db, "jobApplications"), where("candidateDetail.id", "==", userId));

    var allDocs = [];

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // const {id, name} = doc.data();
        allDocs.push(doc.data());
    });
    return allDocs;
}

export async function getUserApplicationsForJob(userId, jobId) {
    if(!userId || !jobId) return [];
    const candidateQuery = where("candidateDetail.id", "==", userId);
    const jobIdQuery = where("jobDetail.id", "==", jobId);
    var q = query(collection(db, "jobApplications"), candidateQuery, jobIdQuery);

    var allDocs = [];

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // const {id, name} = doc.data();
        allDocs.push(doc.data());
    });
    return allDocs;
}

export async function getFilteredJobPosts(companyIdList, departmentIdList, locationIdList, searchTerm) {
    console.log("companyIdList, departmentIdList, locationIdList, searchTerm", companyIdList, departmentIdList, locationIdList, searchTerm);

    var whereQueries = [];
    companyIdList && companyIdList.length > 0 && whereQueries.push(where('company.id', 'in', companyIdList));
    departmentIdList && departmentIdList.length && whereQueries.push(where('department.id', 'in', departmentIdList));
    locationIdList && locationIdList.length && whereQueries.push(where('location.id', 'in', locationIdList));

    const q = query(collection(db, "jobs"), ...whereQueries);

    var allDocs = [];
    const querySnapshot = await getDocs(q);
    var searchTermCollection = searchTerm?.toLowerCase().trim().split(/\s+/);
    console.log("searchTermCollection", searchTermCollection);
    querySnapshot.docs.forEach((doc) => {
        if (searchTerm) {
            var isResultIncluded = false;
            searchTermCollection.forEach((st) => {
                isResultIncluded = isResultIncluded || doc.data().positionName.toLowerCase().includes(st);
            })
            isResultIncluded && allDocs.push(doc.data())
        }
        else
            allDocs.push(doc.data());
    });
    console.log("allDocs:", allDocs);
    return allDocs;
}

export async function getJobPostById(jobId) {
    const docRef = doc(db, "jobs", jobId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data();
    }

    console.log("No such document!");
    return null;
}

export async function getDocumentById(collection, id) {
    if (!collection || !id) return null;

    const docRef = doc(db, collection, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data();
    }

    console.log("No such document!");
    return null;
}

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
