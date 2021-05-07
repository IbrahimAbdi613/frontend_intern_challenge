import userUpdates from "./userUpdates";
import {combineReducers} from "redux";

export default combineReducers({
	user: userUpdates,
});
