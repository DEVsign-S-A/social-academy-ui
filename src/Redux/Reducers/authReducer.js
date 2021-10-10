import { types } from "../Types/type";


export const authReducer = (state = {}, action)=>{
    switch (action.type) {
        case types.authLogin:
            return{
                uid: action.payload.uid,
                name: action.payload.displayName,
                userProfile: action.payload.profile
            }
        case types.authLogout:
            return {}
        default:
            return state;
    }
}