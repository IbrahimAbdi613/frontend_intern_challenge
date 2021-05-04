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
