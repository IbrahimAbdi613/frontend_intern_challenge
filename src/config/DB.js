import "firebase/firestore";
import firebase from "firebase/app";

export async function logUser(user) {
	const db = firebase.firestore();
	let userNominations = db.collection("userNominations");
	let isUser;
	let querySnapshot = await userNominations.where("userId", "==", user.uid).get();
	querySnapshot.forEach(doc => isUser = doc.data());
	if (!isUser) {
		isUser = {
			userId: user.uid,
			Nominations: [],
			Trash: [],
			displayName: user.displayName,
			photoURL:user.photoURL
		}
		userNominations.add(isUser);
	}
	return isUser
}


export async function AddMovie(user, Movieid) {
	const db = firebase.firestore();
	db.collection("userNominations")
		.where("userId", "==", user.userId)
		.get()
		.then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
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
		.where("userId", "==", user.userId)
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

