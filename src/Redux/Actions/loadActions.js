import { types } from "../Types/type";

export const setError = (err)=>({
    type: types.loadSetError,
    payload:  err
});

export const removeError = () =>({
    type: types.loadRemoveError
});

export const startLoading = ()=>({
    type: types.loadStartLoading
});

export const finishLoading = ()=>({
    type: types.loadFinishLoading
});