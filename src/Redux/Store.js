import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
// importar los reducers

const composeEnhancers =
	(typeof window !== "undefined" &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const reducers = combineReducers({
	// aqui van los reducers
});

export const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk))
);
