import React, { useState } from 'react'
import URL from '../config'
import axios from 'axios'


const MiniStatment = () => {

     const[from,setFrom]=useState('')
     const[to,setTo]=useState('')

    const id=localStorage.getItem("userId")
     async function srchData() {
         
        let api=`${URL}/mini`

        await axios.post(api,{id,startDate:from,endDate:to}).then((res)=>{
            console.log(res.data)
        })

         console.log(from,to)
     }
  return (
    <>
    <div className='mini'>
      <h4 style={{color:"#97144d"}}>MINI  STATEMENT</h4>

      <h4 style={{color:'#97144d'}}>From</h4><input type='date' value={from} onChange={(e)=>{setFrom(e.target.value)}} /> 
      <br />
      <h4 style={{color:'#97144d'}}>To</h4><input type='date'  value={to} onChange={(e)=>{setTo(e.target.value)}} /> 
      <br />

      <button onClick={srchData}>Search</button>
     
    </div>
    </>
  )
}

export default MiniStatment
