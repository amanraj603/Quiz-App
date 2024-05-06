import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFetchQuestion } from '../hooks/FetchQuestion'
import { updateResult } from '../hooks/setResult'



function Questions({ onChecked }) {

    const [checked, setChecked] = useState(undefined)
    const [{ isLoading, apiData, serverError}] = useFetchQuestion()
    const trace = useSelector(state => state.questions.trace)
    const result = useSelector(state => state.result.result)
    console.log(result)
    const questions = useSelector(state => state.questions.queue[trace])
    const dispatch = useDispatch()

    // if(isLoading) return <h3 className='text-light'>isLoading</h3>
    // if(serverError) return <h3 className='text-light'>{serverError || "Unknown error"}</h3>
    
    useEffect(()=>{
        dispatch(updateResult({trace, checked}))
        console.log({trace, checked})
    },[checked])

    function onSelect(i){
        onChecked(i)
        setChecked(i)
    }

  return (
    <div className = 'text-white'>
        <h3 className ='w-fit bg-gray-600 ms-20 px-3 text-3xl rounded shadow-md'>{ questions?.question }</h3>
        <ul key={questions?.id}
        className = 'ms-20 w-4/5 px-6 mt-4 text-xl'>
            {
                questions?.options.map((q, i) => {
                    return (
                        <li key={i} className = 'bg-gray-600 mb-2 rounded px-3 py-2 shadow-lg'>
                            <input 
                                type='radio' 
                                name="q1"
                                id={`q${i}-option`} 
                                className='h-4 w-5'
                                onChange={()=>onSelect(i)}
                            />
                            <label htmlFor={`q${i}-option`} className = 'cursor-pointer'> {q}</label>
                            <div className={`$result{trace} == i ? 'checked':''`}></div>
                        </li>
                    );
                })
                
            }
        </ul>
    </div>
  )
}

export default Questions