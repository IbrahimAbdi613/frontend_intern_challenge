import {AddMovie, removeMovie} from "../config/DB"

const userUpdates = (state = null, action) => {
	switch (action.type) {
		case "LOGIN":
			return action.user;
		case "LOGOUT":
			return null;
		case "ADD":
			return action.user
		case "REMOVE":
			return action.user
		default:
			return state;
	}
};

export default userUpdates;
