const bankModal=require('../modal/modal')
const randomPassword=require('../utils/password')
const Email=require('../middleware/nodeMailer')
const accNumber=require('../utils/accountNumber')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const submit=async(req,res)=>{

    const imageUrls = req.files.map(file => file.path);
    console.log(imageUrls)
    
     const accNum=accNumber()
     console.log(accNum)
     req.body.accNum

    const password=randomPassword()
    console.log(password)
    req.body.password
 

    const emailSend=Email(req.body.email,password,accNum)
    console.log(emailSend)
 

  const{ name,dob,ssn,address,email,phone,accounttype,deposit}=req.body
  console.log(req.body)

try {
    const data=await bankModal.create({

        name,
        dob,
        ssn,
        address,
        email,
        phone,
        accounttype,
        deposit,
        image:imageUrls,
        password:password,
        accountNumber:accNum,
       
       })
        res.send('okk')
} catch (error) {
     res.send('error')
}
  
}

const login=async(req,res)=>{
     const{email,password}=req.body

     try {
        const bankUser=await bankModal.findOne({email:email});
 
        if(!bankUser){
           res.send('email is invalid')
        }
        // const match = await bcrypt.compare(password, bankUser.password);

        if(bankUser.password!=password){
          res.send('password is invalid')
        }

         const token= await jwt.sign({id:bankModal._id},process.env.JWT_KEY,{expiresIn:'7days'})

        console.log(token)
       
        res.send({
            token: token,
            user: bankUser 
        });
        

     } catch (error) {
        console.log('error in login')
     }
    
    
}

const reset=async(req,res)=>{
     const{id}=req.body
     
     const data=await bankModal.findById(id)
     res.send(data)
} 


const updatePassword = async (req, res) => {
   const { id, password } = req.body;

   try {
       // Hash the new password
    //    const hashedPassword = await bcrypt.hash(password, 10);

       // Update the user's password in the database
       await bankModal.findByIdAndUpdate(id, { password: password });

       res.send('Password updated successfully');
   } catch (error) {
       console.error('Error updating password:', error);
       res.status(500).send('Error updating password');
   }
};

const auth=async(req,res)=>{

    const token=req.header('x-token')
    console.log(token)

    const verify= await jwt.verify(token, process.env.JWT_KEY);
    console.log(verify);
    const User= await  bankModal.findById(verify.id).select("-password");
    
    res.send(User);
}


module.exports={
    submit,
    login,
    reset,
    updatePassword,
    auth
   
    
}