const express=require('express')

const depoController=require('../controller/depositController')

const route=express.Router()


route.post('/deposit',depoController.deposit)

route.post('/withdraw',depoController.withdraw)

route.get('/totalAmnt',depoController.currentBalance)



module.exports=route