import { types } from "../Types/type";

const initialState = {
    Questions: [],
    Answers: [],
    toogleAnswers: null
}

export const forumReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.loadQuestions:
            return {
                ...state,
                Questions:[...action.payload],
                Answers: [...action.payload]
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