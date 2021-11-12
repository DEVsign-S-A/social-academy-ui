import { types } from "../Types/type";

const initialState = {
    resources: []
};

export const resourceReducer = (state = initialState, action) =>{
    switch (action.type) {
        case types.loadResources:
            return {
                ...state,
                resources: [...action.payload]
            }
    
        default:
            return state;
    }
}