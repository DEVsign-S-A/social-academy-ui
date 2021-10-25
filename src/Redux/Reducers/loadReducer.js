import { types } from "../Types/type";

const initialState = {
    loading: false,
    msgError: null
}

export const loadReducer = (state = initialState, action) =>{
    switch (action.type){
        case types.loadSetError:
            return {
                ...state,
                msgError: action.payload
            }

        case types.loadRemoveError:
            return {
                ...state,
                msgError: null
            }

        case types.loadStartLoading:
            return {
                ...state,
                loading: true
            }

        case types.loadRemoveError:
            return {
                ...state,
                loading: false
            }

        default:
             return state
    }
}