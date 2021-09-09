import { types } from "../Types/type";

export const setSidebar = (setState) =>({
    type: types.showSidebar,
    payload: setState
})


export const setToggleForm = (setState) =>({
    type: types.toggleForm,
    payload: setState
})