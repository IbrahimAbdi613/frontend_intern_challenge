import {AddMovie, removeMovie} from "../config/DB"

const userUpdates = (state = null, action) => {
	switch (action.type) {
		case "LOGIN":
			return action.user;
		case "LOGOUT":
			return null;
		case "ADD":
			return AddMovie(action.user, action.movies)
		case "REMOVE":
			return removeMovie(action.user, action.movies)
		default:
			return state;
	}
};

export default userUpdates;
