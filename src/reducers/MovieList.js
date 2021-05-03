const movieReducer = (state = [], action) => {
	switch (action.type) {
		case "ADD":
			return state.push(action.movie);
		case "REMOVE":
			return state;
		default:
			return state;
	}
};

export default movieReducer;
