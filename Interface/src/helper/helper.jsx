import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from 'axios'

export function attempts_Number(result){
    return result.filter(r => r!==undefined).length;
}

export function earnPoints_Number(result, answers, point) {
    return result.map((element, i) => answers[i] === element) // Map to an array of boolean values indicating correct/incorrect answers
                 .filter(correct => correct) // Filter out only the correct answers
                 .map(() => point) // Map each correct answer to the point value
                 .reduce((prev, curr) => prev + curr, 0); // Sum up the points
}


export function flagResult(totalPoints, earnPoints){
    return (totalPoints*50 /100) < earnPoints;
}

// check user auth
export function CheckUserExist({children}){
    const auth = useSelector(state => state.result.userId)
    return auth ? children : <Navigate to={'/'} replace={true}></Navigate>
}

// get server data
export async function getServerData(url, callback){
    const data =  await (await axios.get(url))?.data;
    return callback ? callback(data) : data;
}

// post server data
export async function postServerData(url, result, callback) {
    try {
        const response = await axios.post(url, result);
        const data = response.data;
        if (callback) {
            callback(data);
        }
        return data;
    } catch (error) {
        console.error('Error while posting data to server:', error);
        throw error; // Re-throw the error to be handled by the caller if needed
    }
}


