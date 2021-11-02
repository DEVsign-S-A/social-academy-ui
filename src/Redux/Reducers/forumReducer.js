import { types } from "../Types/type";

const initialState = {
    QuestionsForum: [],
    toogleAnswers: null
}

export const forumReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.loadQuestions:
            return {
                ...state,
                QuestionsForum:[...action.payload],
            };
            case types.activeQuestion:
                return{
                    ...state,
                    toogleAnswers: action.payload
                }
        default:
            return state;
    }
}