import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { startExam, moveNextAction, movePrevAction } from "../redux/que_reducer"

export const useFetchQuestion = () =>{
    const dispatch = useDispatch();

    const [ getData, setGetData ] = useState({
        isLoading: false,
        apiData: [],
        serverError: null
    })

    useEffect(()=>{
        setGetData(prev => ({...prev, isLoading:true}));

        (
            ()=>{
            try{
                fetch("http://localhost:5000/api/questions").then((res)=>res.json()).then(([{questions, answers}])=>{
                    if(questions.length>0){
                        // setGetData(prev => ({...prev, isLoading:false}));
                        // setGetData(prev => ({...prev, apiData: {questions, answers}}));
                        dispatch(startExam({question : questions, answers}))
                    }
                    else{
                        throw new Error("No question Available")
                    }
                })
            } catch(err){
                // setGetData(prev => ({...prev, isLoading: false}))
                // setGetData(prev => ({...prev, serverError: err}))
                console.log(err)
            }

        })();
    }, [dispatch])

    return [getData, setGetData]
}

export const MoveNextQuestion = () => async (dispatch)=> {
    try{
        dispatch(moveNextAction())
    } catch(err){
        console.log(err)
    }
}

export const MovePrevQuestion = () => async (dispatch)=> {
    try{
        dispatch(movePrevAction())
    } catch(err){
        console.log(err)
    }
}