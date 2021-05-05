import "firebase/firestore";
import "firebase/auth";
import firebase from "firebase/app";
import {logUser,AddMovie} from "./DB";

firebase.initializeApp({
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: "frontend-intern-challenge.firebaseapp.com",
	projectId: "frontend-intern-challenge",
	storageBucket: "frontend-intern-challenge.appspot.com",
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
});

export async function GoogleLogin() {
	const auth = firebase.auth();
	const provider = new firebase.auth.GoogleAuthProvider();
	const credintials = await auth.signInWithPopup(provider);
	logUser(credintials.user);
	return credintials.user;
}
export async function GoogleLogout() {
	const auth = firebase.auth();
	await auth.signOut();
}
