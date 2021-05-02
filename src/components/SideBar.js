import React from "react";
import SideBarItem from "./SideBarItem";
import "../stylesheets/SideBar.css";

let SideBar = () => {
	return (
		<div className="SideBar">
			<SideBarItem name="Nomintations" icon="fas fa-trophy" />
			<SideBarItem name="Trash" icon="fas fa-trash" />
		</div>
	);
};

export default SideBar;
