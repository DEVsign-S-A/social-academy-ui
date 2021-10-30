import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./rootReducer";
import { persistStore } from "redux-persist";


const composeEnhancers =
	(typeof window !== "undefined" &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
