import React from "react";
import "../stylesheets/SearchResult.css";

let SearchResult = (props) => {
	return (
		<div className="SearchResult-Container">
			<img src={props.Poster} className="SearchImage" alt="Movie Poster"></img>
			<div>
				<p className="Title">
					{props.Title} ({props.Year})
				</p>
				<i className="fas fa-trophy" style={{textAlign: "left"}} style = {{position:'relative', left:'1.5rem'}}></i>
			</div>
		</div>
	);
};
export default SearchResult;
