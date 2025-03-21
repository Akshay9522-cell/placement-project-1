
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
     

    const{id}=req.query
    console.log(req.query)
    
    const data = await depositModal.find({custID:id});

            // Format the date

     res.send(data)
}

 const stat=async(req,res)=>{
  
     const{id}=req.body
     console.log(req.body)
     const data=await depositModal.find({custID:id})
     res.send(data)
 }

 const mini=async(req,res)=>{
      
       const{id,startDate,endDate}=req.body
       console.log(req.body)
       try {
        // Convert the dates from strings to Date objects
        const start = new Date(startDate);
        const end = new Date(endDate);

        // Query to find deposits between the two dates
        const deposits = await depositModal.find({
            custID:id,
            date: {
                $gte: start, // Greater than or equal to start date
                $lt: end // Less than end date
            }
        });

        res.json(deposits); // Send the found deposits as the response
    } catch (error) {
        console.error('Error fetching deposits:', error);
        res.status(500).send({ message: 'Server error' });
    }
 }

 


module.exports={
   
    deposit,
    withdraw,
    currentBalance,
    stat,
    mini
}