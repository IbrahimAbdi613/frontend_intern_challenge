import React from "react";
import "../stylesheets/SearchResult.css";
import {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addMovieFromState, removeMovieFromState, addMovie, RemoveMovie} from "../actions";
import {AddMovie, removeMovie} from '../config/DB'
import {motion} from 'framer-motion'

let SearchResult = (props) => {
	const user = useSelector((state) => state.user);
	const [isNominated, setIsNominated] = useState(props.isNominated)
	const [style, setStyle] = useState(props.style)
	const dispatch = useDispatch();

	async function handleAdd() {
		setIsNominated(true)
		if (user.userId)
			dispatch(addMovieFromState(await AddMovie(user, props.MovieId)))
	}
	async function handleRemove() {
		setIsNominated(false)
		if (user.userId)
			dispatch(removeMovieFromState(await removeMovie(user, props.MovieId)))
	}
	return (
		<motion.div
			className="SearchResult-Container"
			whileHover={{scale: 1.1}}
			style={style}
		>
			<img src={props.Poster} className="SearchImage" alt="Movie Poster"></img>
			<div>
				<p className="Title">
					{props.Title} ({props.Year})
				</p>
				{
					isNominated ?
						<motion.div
							whileHover={{scale: 1.7}}
							className="fas fa-trash-alt"
							onClick={handleRemove}
							style={{
								position: 'relative', left: '1.5rem', color: "#E50000"
							}}
						>
						</motion.div>
						:
						user.Nominations.length < 5 &&
						<motion.div
							whileHover={{scale: 1.7}}
							className="fas fa-trophy"
							onClick={handleAdd}
							style={{
								position: 'relative', left: '1.5rem', color: "#DAA520"
							}}
						></motion.div>
				}
			</div>
		</motion.div >
	);
};
export default SearchResult;
