import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import allReducer from "./reducers";
import {createStore} from "redux";
import {loadState, saveState} from './config/LocalStoarage'

const persistedState = loadState();
const store = createStore(
	allReducer,
	persistedState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveState(store.getState()))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);




