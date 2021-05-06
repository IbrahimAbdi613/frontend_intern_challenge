const movieReducer = (state = [], action) => {
	switch (action.type) {
		case "Nominations":
			return action.movies;
		case "TRASH":
			return action.movies;
		default:
			return state;
	}
};

export default movieReducer;
