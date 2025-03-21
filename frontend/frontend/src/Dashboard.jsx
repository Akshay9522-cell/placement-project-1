import React, { useState } from 'react'
import logo from './imges/logo-white.png'
import { Link,Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AiOutlineLogout } from "react-icons/ai";
import { MdAccountBalance } from "react-icons/md";
import { RiLuggageDepositFill } from "react-icons/ri";
import { Toaster,toast } from 'react-hot-toast'

const Dashboard = () => {
     
  
  const nav=useNavigate()
        const logOut=()=>{
            toast("Log out successfully!");
           localStorage.clear()
           nav('/')
           toast.success('Log out.', {
            style: {
              border: '1px solid #713200',
              padding: '16px',
              color: '#713200',
            },
            iconTheme: {
              primary: '#713200',
              secondary: '#FFFAEE',
            },
          });
        }
      

        

  return (
    <>
     <nav className='navv'>
       <h1><img src={logo} alt="" /></h1>
       <button className='btn' onClick={logOut}>LogOut <AiOutlineLogout />  </button>
       
     </nav>
      
      <div className='dash'>
        <ul >
    
            <li className='my'><Link to='dash/myacc' > <MdAccountBalance /> My Account</Link></li>
            <li className='my'><Link to='dash/mydepo'> <RiLuggageDepositFill /> My Deposit</Link></li>
            <li className='my'><Link to='dash/mywith'> <RiLuggageDepositFill /> My withdraw</Link></li>
            <li className='my'><Link to='dash/mybalance'> <RiLuggageDepositFill /> My Balance</Link></li>
            <li className='my'><Link to='dash/resetpass'>Reset password</Link></li>
        </ul>
      </div>
 <Toaster/>
      <Outlet/>
  
    </>
  )
}

export default Dashboard
