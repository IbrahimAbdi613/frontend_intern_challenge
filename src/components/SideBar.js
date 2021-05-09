import React from "react";
import SideBarItem from "./SideBarItem";
import "../stylesheets/SideBar.css";
import {useSelector} from "react-redux";
import Profile from "./Profile";
import {Link} from 'react-router-dom'


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
			<Link to='/' className="link">
				<SideBarItem name="Search" icon="fas fa-search" color='#FFF' />
			</Link>
			<Link to='/Nominations' className="link">
				<SideBarItem name="Nominations" icon="fas fa-trophy" color='#DAA520' />
			</Link>
			<Link to='/Trash' className="link">
				<SideBarItem name="Trash" icon="fas fa-trash-alt" color='#E50000' />
			</Link>
		</div>
	);
};

export default SideBar;
