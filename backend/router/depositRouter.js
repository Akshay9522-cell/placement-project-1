const express=require('express')
const depController=require('../controller/depositController')

const route=express.Router()

route.post('/deposit',depController.deposit)
route.get('/getDeposit',depController.getData)





module.exports=route