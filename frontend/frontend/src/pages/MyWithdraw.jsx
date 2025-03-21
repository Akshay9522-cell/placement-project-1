import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import URL from '../config'
import { Toaster,toast } from 'react-hot-toast'

const MyWithdraw = () => {

     const[withdraw,setWithdraw]=useState({})
     const id=localStorage.getItem("userId")


     async function withdrwaAmount() {
         let api=`${URL}/withdraw`

        await axios.post(api,{custID:id,Amount:withdraw,status:"debit",}).then((res)=>{
           console.log(res.data)
           toast.success('Successfully Withdrawl!')
        })
         console.log(withdraw)
     }
  return (
    <div>
      <h1> My Withdraw</h1>

      Withdrawl<input type='number' value={withdraw} onChange={(e)=>{setWithdraw(e.target.value)}} />
  <button onClick={withdrwaAmount}>Withdrawl</button>

    <Toaster/>
    </div>
  )
}

export default MyWithdraw
