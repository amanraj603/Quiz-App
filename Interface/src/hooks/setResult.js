import {postServerData} from '../helper/helper'
import * as Action from '../redux/result_reducer'

export const PushAnswer = (result) => async(dispatch)=>{
    try{
        await dispatch(Action.pushResultAction(result))
    }catch(err){
        console.log(err)
    }
}

export const updateResult = (index) => async(dispatch)=>{
    try{
        dispatch(Action.updateResultAction(index))
    }catch(error){
        console.log(error)
    }
}

// insert User data
export const usePublishResult = (resultData) => {
    (async () => {
        try {
            const { result, username } = resultData;
            if (result.length === 0 || !username) {
                throw new Error("Couldn't get Result");
            }
            await postServerData("http://localhost:5000/api/result", resultData, data => data);
        } catch (error) {
            console.log(error);
        }
    })();
};   
