import React from 'react'
import logo from './imges/logo-white.png'
import { Link,Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AiOutlineLogout } from "react-icons/ai";
import { MdAccountBalance } from "react-icons/md";
import { RiLuggageDepositFill } from "react-icons/ri";



import { ToastContainer, toast } from 'react-toastify';

const Dashboard = () => {
      const nav=useNavigate()
        const logOut=()=>{
            toast("Wow so easy!");
           localStorage.clear()
           nav('/')
        }



  return (
    <>
     <nav className='navv'>
       <h1><img src={logo} alt="" /></h1>
       <button className='btn' onClick={logOut}>LogOut <AiOutlineLogout />  </button>
     </nav>
      
      <div className='dash'>
        <ul >
            <li className='my'><Link to='dash/myacc'> <MdAccountBalance /> My Account</Link></li>
            <li className='my'><Link to='dash/mydepo'> <RiLuggageDepositFill /> My Deposit</Link></li>
            <li className='my'><Link to='dash/resetpass'>Reset password</Link></li>
        </ul>
      </div>

      <Outlet/>
      <ToastContainer />
    </>
  )
}

export default Dashboard
