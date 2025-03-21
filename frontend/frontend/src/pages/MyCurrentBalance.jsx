import React, { useEffect, useState } from 'react'
import URL from '../config'
import axios from 'axios'

const MyCurrentBalance = () => {

    const[show,setShow]=useState([])

    const id=localStorage.getItem("userId")
     async function getAmount() {
         
    let api=`${URL}/totalAmnt/?id=${id}`

    await axios.get(api).then((res)=>{
         console.log(res.data)
         setShow(res.data)
    })
         
     }

    useEffect(()=>{
        getAmount()
    },[]) 
      
    let depoAmount=0
    let withdrawAmount=0
    let total=0

    let res=show.map((e)=>{
          
          if(e.status=='credit'){
              depoAmount+=e.Amount
          }
          if(e.status=='debit'){
             withdrawAmount+=e.Amount
          }
    })
    total=depoAmount-withdrawAmount
  return (
    <div>
      <h1>Current Balance is:{total}</h1>
    </div>
  )
}

export default MyCurrentBalance
