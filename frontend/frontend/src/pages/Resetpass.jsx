import React, { useState } from 'react';
import URL from '../config';
import axios from 'axios';

const Resetpass = () => {
    const [newPassword, setNewPassword] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const id = localStorage.getItem('userId');

    const resetPass = async () => {
        let api = `${URL}/reset`;
        try {
            const res = await axios.post(api, { id: id });
            console.log(res.data.password);
            setCurrentPassword(res.data.password);
            alert('Current password fetched successfully');
        } catch (error) {
            console.error('Error fetching current password:', error);
            alert('Failed to fetch current password');
        }
    };

    const updatePassword = async () => {
        let api = `${URL}/update`; // Ensure this is the correct endpoint for updating the password
        try {
            const response = await axios.post(api, { id: id, password: newPassword });
            console.log(response.data);
            alert('Password updated successfully');
        } catch (error) {
            console.error('Error updating password:', error);
            alert('Failed to update password');
        }
    };

    return (
        <div>
            <h1>Reset your password</h1>
            <button onClick={resetPass}>Fetch Current Password</button>
            <h4>{`Current password: ${currentPassword}`}</h4>
            <label>
                New Password:
                <input
                    type='password'
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
            </label>
            <button onClick={updatePassword}>Update Password</button>
        </div>
    );
};

export default Resetpass;




// import React, { useState } from 'react'
// import URL from '../config'
// import axios from 'axios'
// import { FaEdit } from "react-icons/fa";


// const Resetpass = () => {

//     const[password,setPassword]=useState('')
   

//      let id=localStorage.getItem('userId')

//       const resetPass=async()=>{
//          let api=`${URL}/reset`
         
//          await axios.post(api,{id:id}).then((res)=>{
//             console.log(res.data.password)
//             setPassword(res.data.password)
//          })
//         alert('done')
//       }
     

    
       

//   return (
//     <div>
//       <h1>reset your password:{id}</h1>
//       <button onClick={resetPass}>Proceed</button>

     
       
//             {`password :${password}`}

//  New Password<input type='password' />           
       
       
       
//     </div>
//   )
// }

// export default Resetpass
