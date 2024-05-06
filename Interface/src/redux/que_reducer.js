import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    queue: [],
    answers: [],
    trace: 0
}
export const questionReducer = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        startExam: (state, action)=>{
            let {question, answers} = action.payload
            return{
                ...state,
                queue: question,
                answers
            }
        },
        moveNextAction: (state)=>{
            return{
                ...state,
                trace: state.trace+1
            }
        },
        movePrevAction: (state) =>{
            return{
                ...state,
                trace: state.trace-1
            }
        },
        resetAllAction: () =>{
            return{
                queue: [],
                answers: [],
                trace: 0
            }
        }
    }
})

export const {startExam, moveNextAction, movePrevAction, resetAllAction} = questionReducer.actions;

export default questionReducer.reducer