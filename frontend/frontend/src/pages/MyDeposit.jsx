import React, { useEffect, useState } from 'react'
import URL from '../config'
import axios from 'axios'

const MyDeposit = () => {

             const[inp,setInp]=useState({})
             const[show,setShow]=useState([])

             const handleInp=(e)=>{
                let name=e.target.name
                let value=e.target.value

                setInp(values=>({...values,[name]:value}))
             }

          async   function depositAmnt(){

              let api=`${URL}/deposit`

              await axios.post(api,inp).then((res)=>{
                 console.log(res.data)
              })
              console.log(inp)
             }
            
             const depositData=async()=>{
                
                 let api=`${URL}/getDeposit`

                 await axios.get(api).then((res)=>{
                      console.log(res.data)
                      setShow(res.data)
                 })
             }
      useEffect(()=>{
        depositData()
      },[depositAmnt])

      let res=show.map((e)=>{
          return(
            <>
             <tr>
              <td>{e.date}</td>
              <td>{e.medium}</td>
              <td>{e.credit}</td>
             </tr>
            </>
          )
      })

  return (
    <div>
      <h1>my Deposit</h1>
       
       <div>
             Date:<input type='date' name='date' onChange={handleInp} /> <br />
             Medium:<input type='text' name='medium' onChange={handleInp} /> <br />
             Credit:<input type='text' name='credit' onChange={handleInp} /> <br />

             <button onClick={depositAmnt}>Deposit Your Amount</button>
 
       </div>

       <table className='tab' border={1}>
        <tr>
          <th>Date</th>
          <th>Medium</th>
          <th>Amount</th>
        </tr>
        {res}
       </table>
    </div>
  )
}

export default MyDeposit
