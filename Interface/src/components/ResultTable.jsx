import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { usePublishResult } from '../hooks/setResult'
import { getServerData } from '../helper/helper'

function ResultTable() {
    const { result:{ userId }} = useSelector(state=>state)

    const [data, setData] = useState([])
    useEffect(()=>{
        getServerData("http://localhost:5000/api/result", (res)=>{
            setData(res);
            
        })
    },[])

  return (
    <>
        <table className='table-auto border text-white'>
            <thead className='border'>
                <tr>
                    <td className='border px-3'>Name</td>
                    <td className='border px-3'>Attempts</td>
                    <td className='border px-3'>Earn points</td>
                    <td className='border px-3'>Result</td>
                </tr>
            </thead>
            <tbody  className='border'>
                {/* {!data ?? <div>No Data Found</div>} */}
                {
                    data.map((v,i)=>(
                        <tr key={i}>
                            <td className='border px-3'>{v?.username || ''}</td>
                            <td className='border px-3'>{v?.attempts|| 0}</td>
                            <td className='border px-3'>{v?.points || 0}</td>
                            <td className='border px-3'>{v?.achived || ''}</td>
                        </tr> 
                    ))
                }
                
            </tbody>
        </table>
    </>
  )
}

export default ResultTable