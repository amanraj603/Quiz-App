import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import ResultTable from './ResultTable';
import {useDispatch, useSelector} from 'react-redux'
import { resetAllAction } from '../redux/que_reducer';
import { resetResultAction } from '../redux/result_reducer';
import { attempts_Number, earnPoints_Number, flagResult } from '../helper/helper'
import { usePublishResult } from '../hooks/setResult';

function Result() {

  const dispatch = useDispatch()
  const { questions: {queue, answers}, result:{ result, userId }} = useSelector(state=>state)

  const totalPoints = queue.length*10;
  const attempts = attempts_Number(result);
  const earnPoints = earnPoints_Number(result, answers, 10)
  const flag = flagResult(totalPoints, earnPoints)

  // store user result
  usePublishResult({ result, username: userId, attempts, points: earnPoints, achived:flag ? "passed":"failed" })
  

  function onRestart(){
    dispatch(resetAllAction())
    dispatch(resetResultAction())
  }
  
  return (
    <div className='bg-zinc-400 h-screen text-center'>
      <div className='bg-gray-700 w-1/2 border border-sky-500  items-center mx-auto rounded-lg'>
        <h1 className='py-2 text-white w-fit mb-6 mt-5 border-2 border-lime-500 mx-auto px-5 text-3xl rounded-md shadow-lg'>Quiz started</h1>
          
        <div className='border rounded mx-auto w-2/3 mb-6 px-10 py-7 text-white'>
          <div className='flex justify-between'>
            <span>Username</span>
            <span>{userId}</span>
          </div>
          <div className='flex justify-between'>
            <span>Total Quiz Points: </span>
            <span>{ totalPoints || 0}</span>
          </div>
          <div className='flex justify-between'>
            <span>Total Questions</span>
            <span> { queue.length || 0}</span>
          </div>
          <div className='flex justify-between'>
            <span>Total Attempts</span>
            <span>{ attempts || 0}</span>
          </div>
          <div className='flex justify-between'>
            <span>Total Earned Points</span>
            <span>{ earnPoints || 0}</span>
          </div>
          <div className='flex justify-between'>
            <span>Quiz Result</span>
            <span style={{color: `${flag ? "#2aff95":"#ff2a66"}`}}> {flag? "Passed": "Failed"} </span>
          </div>
        </div>

        <button type="submit" className='bg-yellow-700 text-white px-3 py-1 my-2 rounded hover:text-xl'>
          <Link to={'/'} onClick={onRestart}>
            Restart
          </Link>
        </button>
        <div className='mx-auto w-1/2 mt-5 mb-5'>
        <ResultTable/>
        </div>
      </div>
    </div>
  )
}

export default Result