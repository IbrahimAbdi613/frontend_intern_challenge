import React from "react";
import "../stylesheets/SearchResult.css";
import {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addMovieFromState, removeMovieFromState} from "../actions";
import {AddMovie, removeMovie} from '../config/DB'



let SearchResult = (props) => {
	const user = useSelector((state) => state.user);
	const [style, setStyle] = useState({position: 'relative', left: '1.5rem'});
	const [isNominated, setIsNominated] = useState(props.isNominated)
	const dispatch = useDispatch();

	async function handleAdd() {
		dispatch(addMovieFromState(await AddMovie(user, props.MovieId)))
		setIsNominated(true)
		setStyle(prevState => {
			return {...prevState, color: 'red'}
		})
	}
	async function handleRemove() {
		dispatch(removeMovieFromState(await removeMovie(user, props.MovieId)))
		setIsNominated(false)
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
				{
					isNominated ?
						<div className="fas fa-trash" onClick={handleRemove} style={style} ></div> :
						<div className="fas fa-trophy" onClick={handleAdd} style={style} ></div>
				}
			</div>
		</div>
	);
};
export default SearchResult;
