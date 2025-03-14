const bankModal=require('../modal/modal')
const randomPassword=require('../utils/password')
const Email=require('../middleware/nodeMailer')
const accNumber=require('../utils/accountNumber')
const bcrypt = require('bcryptjs');

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
        accountNumber:accNum
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
        const match = await bcrypt.compare(password, bankUser.password);

        if(!match){
          res.send('password is invalid')
        }

        res.send(bankUser);

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
       const hashedPassword = await bcrypt.hash(password, 10);

       // Update the user's password in the database
       await bankModal.findByIdAndUpdate(id, { password: hashedPassword });

       res.send('Password updated successfully');
   } catch (error) {
       console.error('Error updating password:', error);
       res.status(500).send('Error updating password');
   }
};



module.exports={
    submit,
    login,
    reset,
    updatePassword
   
    
}