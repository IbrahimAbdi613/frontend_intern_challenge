import "./stylesheets/App.css";
import React from "react";
import SearchBox from "./components/SearchBox";
import SideBar from "./components/SideBar";
import {GoogleLogin, GoogleLogout} from "./config/Auth";
import {login, logout} from "./actions";
import {useDispatch, useSelector} from "react-redux";

let App = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	return (
		<div>
			{!user ? (
				<button
					onClick={async () => {
						try {
							dispatch(login(await GoogleLogin()));
						} catch (error) {
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
