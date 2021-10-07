import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { authReducer } from "./Reducers/authReducer";
import { docReducer } from "./Reducers/docReducer";
import { uiReducer } from "./Reducers/uiReducer";
import { forumReducer } from "./Reducers/forumReducer";
// importar los reducers

const composeEnhancers =
	(typeof window !== "undefined" &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const reducers = combineReducers({
	ui: uiReducer,
	doc: docReducer,
	auth: authReducer,
	forum: forumReducer
});

export const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk))
);
