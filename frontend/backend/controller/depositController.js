const depositModal=require('../modal/deposit')


const deposit=async(req,res)=>{
    
   const{date,medium,credit}=req.body

   const data=await depositModal.create({
      
      date,
      medium,
      credit
   })
    res.send("ok")
}

const getData=async(req,res)=>{

    const data=await depositModal.find()
    res.send(data)
}



module.exports={
    deposit,
    getData
}