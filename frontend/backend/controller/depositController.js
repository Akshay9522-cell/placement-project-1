const depositModal=require('../modal/deposit')

const deposit=async(req,res)=>{
     
     const{custID,Amount,status}=req.body
     console.log(req.body)

    try {

         const user=new depositModal({
            custID,Amount,status
         })

         await user.save()
         res.status(200).send({
            success:true,
            message:'deposit success',
            user
         })
        
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"error"
        })
    }
     
}

const withdraw=async(req,res)=>{
     
    const{custID,Amount,status}=req.body
    console.log(req.body)

   try {

        const user=new depositModal({
           custID,Amount,status
        })

        await user.save()
        res.status(200).send({
           success:true,
           message:'deposit success',
           user
        })
       
   } catch (error) {
       res.status(500).send({
           success:false,
           message:"error"
       })
   }
    
}


const currentBalance=async(req,res)=>{
     

    console.log(req.query)

    const data=await depositModal.find()
     res.send(data)
}


module.exports={
   
    deposit,
    withdraw,
    currentBalance
}