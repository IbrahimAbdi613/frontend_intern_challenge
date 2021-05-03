import React from "react";
import SearchBox from "./components/SearchBox";
import SideBar from "./components/SideBar";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "./stylesheets/App.css";

import {useAuthState} from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {login} from "./actions";
import {useDispatch} from "react-redux";

firebase.initializeApp({
	apiKey: "AIzaSyC7yKIMHuibYdZYpvLJDZjopGgqS2WxmE8",
	authDomain: "frontend-intern-challenge.firebaseapp.com",
	projectId: "frontend-intern-challenge",
	storageBucket: "frontend-intern-challenge.appspot.com",
	messagingSenderId: "1010737931879",
	appId: "1:1010737931879:web:65395f3764800457b0d6c2",
});

const auth = firebase.auth();

async function GoogleLogin() {
	const provider = new firebase.auth.GoogleAuthProvider();
	const credintials = await auth.signInWithPopup(provider);
	return credintials.user;
}

let App = () => {
	const dispatch = useDispatch();
	return (
		<div>
			<button
				onClick={async () => {
					try {
						dispatch(login(await GoogleLogin()));
					} catch (error) {
						console.error(error);;
					}
				}}
			>
				Sign in With Google
			</button>
			<div className="flexbox-container">
				<SideBar className="flexbox-container-1" />
				<SearchBox />
			</div>
		</div>
	);
};

export default App;
