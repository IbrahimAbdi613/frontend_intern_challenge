import React from "react";
import SearchResult from "./SearchResult";
import "../stylesheets/SearchBox.css";
import {connect} from 'react-redux';
import {motion} from 'framer-motion'
require("dotenv").config();


class SearchBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			userinput: "",
			searchResult: [],
			numOfResults: 0,
			page: 1,
		};
		this.apiKey = process.env.REACT_APP_IMDB_API_KEY;
		this.handleSearch = this.handleSearch.bind(this);
		this.handleClear = this.handleClear.bind(this);
		this.handlePageNext = this.handlePageNext.bind(this);
		this.handlePagePrev = this.handlePagePrev.bind(this);
		this.renderResults = this.renderResults.bind(this);
	}

	async handleSearch(event) {
		const {value} = event.target;
		this.setState({userinput: value});
		let movies = [];
		let data = await (
			await fetch(
				`https://www.omdbapi.com/?apikey=${this.apiKey}&s=${value}&page=${this.state.page}`
			)
		).json();
		if (data.Search) {
			movies = this.renderResults(data.Search);
			this.setState({searchResult: movies, numOfResults: data.totalResults});
		}
	}

	async handlePageNext() {
		let movies = [];
		let data = await (
			await fetch(
				`https://www.omdbapi.com/?apikey=${this.apiKey}=${
					this.state.userinput
				}&page=${this.state.page + 1}`
			)
		).json();
		if (data.Search) {
			movies = this.renderResults(data.Search);
			this.setState((prevState) => {
				return {
					page: prevState.page + 1,
					searchResult: movies,
				};
			});
		}
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}

	async handlePagePrev() {
		let movies = [];
		let data = await (
			await fetch(
				`https://www.omdbapi.com/?apikey=${this.apiKey}=${
					this.state.userinput
				}&page=${this.state.page - 1}`
			)
		).json();
		if (data.Search) {
			movies = this.renderResults(data.Search);
			this.setState((prevState) => {
				return {
					page: prevState.page - 1,
					searchResult: movies,
				};
			});
		}
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}

	handleClear() {
		this.setState({
			userinput: "",
			searchResult: [],
			numOfResults: 0,
			page: 1,
		});
	}

	renderResults(movies) {
		return movies.map((movie) => {
			const isNominated = this.props.user.Nominations.includes(movie.imdbID)
			return (
				<SearchResult
					Title={movie.Title}
					Poster={movie.Poster}
					Year={movie.Year}
					MovieId={movie.imdbID}
					isNominated={isNominated}
				/>
			);
		});
	}

	render() {
		const buttonStyle = {
			backgroundColor: "#1b4670",
			borderColor: "#1b4670",
			margin: "5%",
			color: "white",
			padding: "1vw",
			borderRadius: "0.5rem",
			textAlign: "center"

		}
		return (
			<motion.div
				className="Container"
				initial={{x: 250}}
				animate={{x: 0}}
			>
				<div className="Container">
					<motion.div className="input-wrapper"
						whileHover={{scale: 1.1}}
					>
						<div className="fa fa-search"></div>
						<input
							type="text"
							value={this.state.userinput}
							placeholder="Search here"
							onChange={this.handleSearch}
						/>
						<motion.div
							className="fa fa-times"
							onClick={this.handleClear}
							whileHover={{scale: 1.7}}
						></motion.div>
					</motion.div>
				</div>
				<div className="searchResultContainer">
					{this.state.searchResult}
				</div>
				<div className="buttons">
					{this.state.page > 1 && (
						<motion.div
							onClick={this.handlePagePrev}
							className="fas fa-arrow-circle-left"
							style={buttonStyle}
							whileHover={{scale: 1.3}}

						>
						</motion.div>
					)}
					{this.state.numOfResults > this.state.page * 10 && (
						<motion.div
							onClick={this.handlePageNext}
							className="fas fa-arrow-circle-right"
							style={buttonStyle}
							whileHover={{scale: 1.3}}
						>

						</motion.div>
					)}
				</div>

			</motion.div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(SearchBox);
