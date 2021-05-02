import React from "react";
import SearchBox from "./components/SearchBox";
import SideBar from "./components/SideBar";
import "./stylesheets/App.css";   

let App = () => {
	return (
		<div className="flexbox-container">
			<SideBar className="flexbox-container-1" />
			<SearchBox />
		</div>
	);
};

export default App;
