import {persistReducer} from "redux-persist";
import {combineReducers} from "redux";
import storage from "redux-persist/lib/storage";

import { authReducer } from "./Reducers/authReducer";
import { docReducer } from "./Reducers/docReducer";
import { uiReducer } from "./Reducers/uiReducer";
import { forumReducer } from "./Reducers/forumReducer";
import { loadReducer } from "./Reducers/loadReducer";

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['auth', 'doc']
}

const rootReducers = combineReducers({
	ui: uiReducer,
	doc: docReducer,
	auth: authReducer,
	forum: forumReducer,
	load: loadReducer
});

export default persistReducer(persistConfig, rootReducers);