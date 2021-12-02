import { types } from "../Types/type";

const initalState = {
	interships: [],
};
export const intershipReducer = (state = initalState, action) => {
	switch (action.type) {
		case types.loadIntership:
			return {
				...state,
				interships: [...action.payload]
			};
		case types.logout:
			return {
				checking: true,
			};
			case '[AUTH] Logout':
				return {}
		default:
			return state;
	}
};