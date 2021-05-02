import React from "react";
import "../stylesheets/SideBarItem.css";

let SideBarItem = (props) => {
	return (
		<div>
			<div className="SideBarItem">
				<i class={props.icon}></i>
				<label className="SideBarLabel">{props.name}</label>
			</div>
		</div>
	);
};

export default SideBarItem;
