import {persistReducer} from "redux-persist";
import {combineReducers} from "redux";
import storage from "redux-persist/lib/storage";

import { authReducer } from "./Reducers/authReducer";
import { docReducer } from "./Reducers/docReducer";
import { uiReducer } from "./Reducers/uiReducer";
import { forumReducer } from "./Reducers/forumReducer";
import { loadReducer } from "./Reducers/loadReducer";
import { intershipReducer } from "./Reducers/intershipReducer";
import { userReducer } from "./Reducers/userReducer";
import { resourceReducer } from "./Reducers/resourcesReducer";
import { businessReducer } from "./Reducers/businessReducer";

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['auth', 'doc', 'ui', 'forum', 'load', 'intership', 'resource', 'business']
}

const rootReducers = combineReducers({
	ui: uiReducer,
	doc: docReducer,
	auth: authReducer,
	forum: forumReducer,
	load: loadReducer,
	intership: intershipReducer,
	user: userReducer,
	resource: resourceReducer,
	business: businessReducer,
});

export default persistReducer(persistConfig, rootReducers);