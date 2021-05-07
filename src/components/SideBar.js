import React from "react";
import SideBarItem from "./SideBarItem";
import "../stylesheets/SideBar.css";
import {useSelector} from "react-redux";
import Profile from "./Profile";


let SideBar = () => {
	const user = useSelector((state) => state.user);
	return (
		<div className="SideBar">
			{user && (
				<Profile
					img={user.photoURL}
					name={user.displayName}
					userId={user.uid}
				/>
			)}
			<SideBarItem name="Nominations" icon="fas fa-trophy" />
			<SideBarItem name="Trash" icon="fas fa-trash" />
		</div>
	);
};

export default SideBar;
