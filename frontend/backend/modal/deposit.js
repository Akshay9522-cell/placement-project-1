const mongoose=require('mongoose')

const depositSchema=new mongoose.Schema({

    custID:{
        type:String,
    },
    Amount: {
        type:Number,
    },
    status:{
        type:String
    }
},{timestamps:true})

module.exports=mongoose.model('deposit',depositSchema)
