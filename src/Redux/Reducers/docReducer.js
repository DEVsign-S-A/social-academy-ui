import { types } from "../Types/type";

const initialState = {
	tipoDoc: "Documento",
};

export const docReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.changeSelectType:
			return {
				...state,
				tipoDoc: action.payload,
			};
		case "[AUTH] Logout":
			return {};
		default:
			return state;
	}
};
