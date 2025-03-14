import React from 'react'


const MyAccount = () => {

  
  return (
    <div>
      {/* <h1 className='my'>My Account details</h1> */}
      <div className='sidebar'>
        <div className='info'>
       <h3>Name:</h3> <h4> {localStorage.getItem('userName')}</h4 >
       <h3>Email:</h3>   <h4>{localStorage.getItem('userEmail')}</h4>
       <h3>Phone:</h3>  <h4>{localStorage.getItem('userPhone')}</h4>
       <h3>AccNumber:</h3>   <h4>{localStorage.getItem('userAccnumber')}</h4>
       <h3>Address:</h3>   <h4>{localStorage.getItem('userAddress')}</h4>

      
      
        </div>
          
      </div>
    </div>
  )
}

export default MyAccount
