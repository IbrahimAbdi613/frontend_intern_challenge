import React from "react";

class SearchBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userinput: "",
			searchResult: [],
		};
		this.handleSearch = this.handleSearch.bind(this);
	}

	async handleSearch(event) {
		const {value} = event.target;
		let movies = await (
			await fetch("http://www.omdbapi.com/?apikey=3957fc4e&s=" + value)
		).json();
		this.setState({userinput: value, searchResult: movies.Search});
	}

	render() {
		return (
			<div>
				<input
					type="text"
					value={this.state.userinput}
					placeholder="search here"
					onChange={this.handleSearch}
				/>
			</div>
		);
	}
}

export default SearchBox;
