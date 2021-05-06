import "./stylesheets/App.css";
import React from "react";
import SearchBox from "./components/SearchBox";
import SideBar from "./components/SideBar";
import {GoogleLogin, GoogleLogout} from "./config/Auth";
import {login, logout} from "./actions";
import {useDispatch, useSelector} from "react-redux";
import "firebase/firestore";
import firebase from "firebase/app";

let App = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const db = firebase.firestore();

		return (
			<div>
				<h1>{process.env.REACT_APP_IMDB_API_KEY}</h1>
			{!user ? (
				<button
					onClick={async () => {
							try {
								let userState = await GoogleLogin()
								dispatch(login(userState));
								let querySnapshot = await db.collection("userNominations").where("userId", "==", userState.userId).onSnapshot((querySnapshot) => {
									querySnapshot.docs.map((doc) => dispatch(login(doc.data())))
								})
							}
						 catch (error) {
							console.error(error);
						}
					}}
				>
					Sign in With Google
				</button>
			) : (
				<button
					onClick={async () => {
						try {
							await GoogleLogout();
							dispatch(logout());
						} catch (error) {
							console.error(error);
						}
					}}
				>
					Sign out
				</button>
			)}

			<div className="flexbox-container">
				<SideBar className="flexbox-container-1" />
				<SearchBox />
			</div>
		</div>
	);

};

export default App;
