import React, { useState } from 'react'
import { GrCircleInformation } from "react-icons/gr";
import img from '../imges/login.jpg'
import { Link } from 'react-router-dom';
import URL from '../config';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const Login = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

       const[email,setemail]=useState('')
       const[password,setPassword]=useState('')

       const logIn=async()=>{

           let api=`${URL}/login`

            await axios.post(api,{email:email,password:password}).then((res)=>{
                console.log(res.data)

                localStorage.setItem("userName",res.data.name)
                localStorage.setItem("userPhone",res.data.phone)
                localStorage.setItem("userEmail",res.data.email)
                localStorage.setItem("userAddress",res.data.address)
            })
          
       }
         
  return (
    <>
      <div className='loginpage'>
       <div className='login'>
        
        <h1>Login using</h1>

         <div className='form'>
            <label htmlFor="">Login ID / Customer ID <GrCircleInformation /> <br />
            <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} />
            <p> <span onClick={handleShow}>Forgot customer ID</span></p>

            </label> <br />
           

            <label htmlFor="">Password  <br />
            <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            <p> <span onClick={handleShow}> Forgot password</span></p>
            </label>

            <button onClick={logIn}>Log in</button>
            <p>First time user <Link to='regis'> <span id='regis'>REGISTER HERE </span> </Link></p>
           
         </div>
         
       </div>
       <div className='img'><img src={img} style={{width:'400px',height:'400px'}} /></div>
      </div>

    

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Welcome to Axis</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Enter Your Mobile Number:<input type='number'/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Send OTP
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Login
