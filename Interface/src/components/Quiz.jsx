import React, { useEffect, useState } from 'react'
import Questions from './Questions';
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion';
import { useSelector, useDispatch } from 'react-redux'
import { PushAnswer } from '../hooks/setResult';
import { Navigate } from 'react-router-dom'

function Quiz() {
  const [check, setCheck] = useState(undefined)

  const result = useSelector(state => state.result.result)
  const { queue, trace} = useSelector(state => state.questions)
  const dispatch = useDispatch()


  function OnPrev(){
    if(trace>0)
    dispatch(MovePrevQuestion())
  }

  function OnNext(){
    if(trace < queue.length){
      dispatch(MoveNextQuestion())
      if(result.length <= trace){
        dispatch(PushAnswer(check))
      }
    }

    setCheck(undefined)
  }

  function onChecked(check){
    setCheck(check)
  }

  if(result.length && result.length >= queue.length){
    return <Navigate to={'result'}/>
  }

  return (
    <div className='bg-zinc-400 h-screen'>
      <div className='bg-gray-700 w-1/2 border border-sky-500  items-center mx-auto rounded-lg'>
        <h1 className='py-2 text-white w-fit mb-6 mt-5 border-2 border-lime-500 mx-auto px-5 text-3xl rounded-md shadow-lg'>Quiz started</h1>
          
          <Questions onChecked={onChecked}/>

        <div className='flex justify-between'>
          {
            trace > 0 ? <button 
            className='bg-yellow-400 rounded px-5 text-left mx-9 my-4 py-2 text-xl'
            onClick={OnPrev}
            > Prev</button> : <div></div>
          }
          <button 
          className='bg-yellow-400 rounded px-5 text-right mx-9 my-4 py-2 text-xl'
          onClick={OnNext}
          >Next</button>
        </div>
      </div>
    </div>
  )
}

export default Quiz