import {types} from '../Types/type';

export const changeType = (docType) =>({
    type: types.changeSelectType,
    payload: docType 
})