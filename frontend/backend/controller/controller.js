const bankModal=require('../modal/modal')
const randomPassword=require('../utils/password')
const Email=require('../middleware/nodeMailer')

const submit=async(req,res)=>{

    const imageUrls = req.files.map(file => file.path);
    console.log(imageUrls)


    const password=randomPassword()
    console.log()
    req.body.password

    const emailSend=Email(req.body.email)
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
        password:password
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

        if(bankUser.password!=password){
          res.send('password is invalid')
        }

        res.send(bankUser);

     } catch (error) {
        console.log('error in login')
     }
    


}


module.exports={
    submit,
    login
}