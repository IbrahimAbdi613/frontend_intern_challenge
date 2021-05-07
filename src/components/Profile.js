import React from "react";
import "../stylesheets/Profile.css";


let Profile = (props) => {
	return (
		<div className="profileContainer">
			<img className="profileImage" src={props.img} />
			<label className="profileName"> {props.name} </label>
		</div>
	);
};

export default Profile;
