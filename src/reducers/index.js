import LoggedReducer from "./isLogged";
import MovieReducer from "./MovieList";

import {combineReducers} from "redux";

export default combineReducers({
	user: LoggedReducer,
	nominationList: MovieReducer,
});
