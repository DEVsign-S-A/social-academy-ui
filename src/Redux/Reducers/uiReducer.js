import { types } from "../Types/type";

const initialState = {
    showSidebar: false,
    toggleForm: false
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.showSidebar:
            return {
                ...state,
                showSidebar: action.payload
            };
            case types.toggleForm:
                return{
                    ...state,
                    toggleForm: action.payload
                }
        default:
            return state;
    }
}