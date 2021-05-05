import "firebase/firestore";
import firebase from "firebase/app";

export async function logUser(user) {
	const db = firebase.firestore();
	let userNominations = db.collection("userNominations");
	let isUser = false;
	userNominations
		.where("userId", "==", user.uid)
		.get()
		.then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				isUser = true;
			});
			if (!isUser) {
				userNominations.add({
					userId: user.uid,
					Nominations: [],
					Trash: [],
				});
			}
		})
		.catch((error) => {
			console.error("Error getting documents: ", error);
		});
}

export async function AddMovie(user, Movieid) {
	const db = firebase.firestore();
	db.collection("userNominations")
		.where("userId", "==", user.uid)
		.get()
		.then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				console.log(doc.id)
			let userNominationsRef = db.collection("userNominations").doc(doc.id);
				userNominationsRef.update({
    				Nominations: firebase.firestore.FieldValue.arrayUnion(Movieid)
				});
			});
		})
		.catch((error) => {
			console.error("Error getting documents: ", error);
		});
}

export async function removeMovie(user, Movieid) {
	const db = firebase.firestore();
	db.collection("userNominations")
		.where("userId", "==", user.uid)
		.get()
		.then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
			let userNominationsRef = db.collection("userNominations").doc(doc.id);
				userNominationsRef.update({
					Nominations: firebase.firestore.FieldValue.arrayRemove(Movieid),
					Trash: firebase.firestore.FieldValue.arrayUnion(Movieid)
				});
			});
		})
		.catch((error) => {
			console.error("Error getting documents: ", error);
		});
}

