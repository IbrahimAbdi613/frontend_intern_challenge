import React from "react";
import "../stylesheets/SearchResult.css";
import {AddMovie} from '../config/DB'
import {useSelector} from "react-redux";
import {useState} from 'react';

let SearchResult = (props) => {
	const user = useSelector((state) => state.user);
	const [style, setStyle] = useState({position: 'relative', left: '1.5rem'});

	function handleAdd() {
		AddMovie(user, props.MovieId);
		setStyle(prevState => {
			return {...prevState, color: 'red'}
		})
	}
	return (
		<div className="SearchResult-Container">
			<img src={props.Poster} className="SearchImage" alt="Movie Poster"></img>
			<div>
				<p className="Title">
					{props.Title} ({props.Year})
				</p>
				<div className="fas fa-trophy" onClick={handleAdd} style = {style} ></div>
			</div>
		</div>
	);
};
export default SearchResult;
