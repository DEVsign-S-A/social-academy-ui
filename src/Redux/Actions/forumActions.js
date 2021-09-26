import { types } from "../Types/type"

export const toogleQuestion=(id)=>({
    type: types.activeQuestion,
    payload: id
})
