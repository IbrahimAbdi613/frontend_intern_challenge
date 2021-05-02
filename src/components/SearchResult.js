import React from "react";
import "../stylesheets/SearchResult.css";

let SearchResult = (props) => {
	return (
		<div className="SearchResult-Container">
			<img src={props.Poster} className="SearchImage" alt="Movie Image"></img>
			<p className="Title">
				{props.Title} ({props.Year})
			</p>
		</div>
	);
};
export default SearchResult;
