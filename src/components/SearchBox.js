import React from "react";
import SearchResult from "./SearchResult";
import "../stylesheets/SearchBox.css";

class SearchBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userinput: "",
			searchResult: [],
		};
		this.handleSearch = this.handleSearch.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	async handleSearch(event) {
		const {value} = event.target;
		let data = await (
			await fetch("http://www.omdbapi.com/?apikey=3957fc4e&s=" + value)
		).json();
		let movies = [];
		if (data.Search) {
			movies = data.Search.map((movie) => {
				return (
					<SearchResult
						Title={movie.Title}
						Poster={movie.Poster}
						Year={movie.Year}
					/>
				);
			});
		}
		this.setState({
			userinput: value,
			searchResult: movies,
		});
	}

	handleClick() {
		this.setState({
			userinput: "",
			searchResult: [],
		});
	}

	render() {
		return (
			<div className="Container">
				<h2>Search Movies</h2>
				<div className="input-wrapper">
					<div className="fa fa-search"></div>
					<input
						type="text"
						value={this.state.userinput}
						placeholder="Search here"
						onChange={this.handleSearch}
					/>
					<div className="fa fa-times" onClick={this.handleClick}></div>
				</div>
				{this.state.searchResult}
			</div>
		);
	}
}

export default SearchBox;
