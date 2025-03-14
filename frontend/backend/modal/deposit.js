const mongoose=require('mongoose')

const depositSchema=new mongoose.Schema({
    date: {
        type: Date,
        default: () => {
            const now = new Date();
            return new Date(now.getDate(), now.getMonth(),now.getFullYear() );
        }
    } ,   
     
     medium:{
        type:String,
        required:true
     },
     credit:{
            type:String,
            required:true
     }

})

module.exports=mongoose.model('credit',depositSchema)