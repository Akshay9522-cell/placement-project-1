import React, { useEffect, useState } from 'react'
import axios from 'axios'
import URL from '../config'
import { Toaster,toast } from 'react-hot-toast'


const MyDeposit = () => {

   toast('Deposite Your Amount!',
      {
        icon:'✔',
        style: {
          borderRadius: '10px',
          background: 'green',
          color: '#fff',
        },
      }
    );

   const[deposit,setDeposit]=useState({})
  const id=localStorage.getItem("userId")
    async function depositAmount(){
      
        let api=`${URL}/deposit`

        await axios.post(api,{custID:id,Amount:deposit,status:"credit",}).then((res)=>{
           console.log(res.data)
           toast.success('Successfully Deposit!')
        })
         console.log(deposit)
    }
          
  return (
    <div>
 <h1>MyDeposit</h1>

  Deposit<input type='number' value={deposit} onChange={(e)=>{setDeposit(e.target.value)}} />
  <button onClick={depositAmount}>Deposit</button>
  <Toaster/>
    </div>
  )
}

export default MyDeposit
