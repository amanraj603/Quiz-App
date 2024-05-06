import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

import {Link} from 'react-router-dom'
import { setUserId } from '../redux/result_reducer'

function Index() {

    const inputRef = useRef(null)
    const dispatch = useDispatch();

    function startQuiz(){
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
        }
    }
    
  return (
    <div className='bg-zinc-400 text-center w-full h-screen'>
        <div className='bg-gray-700 w-1/2 h-2/3 border border-sky-500 flex flex-col items-center mx-auto'>
            <h1 className='py-2 text-white w-fit mb-6 border-2 border-lime-500 mx-auto  mt-5 px-5 text-3xl rounded-md shadow-lg'>Quiz Application</h1>
            <p className='text-white text-left'>Quiz Instruction :<br />
            1. There are five questions.<br/>
            2. MCQ based Quiz.<br/>
            3. 10 points will be awarded for the each correct answer.<br/>
            4. Each question has four options. You can choose only one from them. <br/> 
            5. The result will be declared on the end of the quiz.
            </p>
            <label htmlFor="username" className='text-white text-xl'>Username: {" "}
            <input 
            type='text' 
            ref={inputRef}
            placeholder='Enter username' 
            className='px-2 mt-9 rounded w-1/2 text-black'  
            id='username'
            />
            </label>
            <button type="submit" className='bg-yellow-700 text-white px-3 py-1 my-2 rounded hover:text-xl'>
                <Link to={'quiz'}
                onClick={startQuiz}
                >
                    Start Test
                </Link>
            </button>
        </div>
    </div>

  )
}

export default Index