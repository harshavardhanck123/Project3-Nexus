const express=require('express')
const customerController=require('../controllers/customerController')
const router=express.Router();

router.post('/new',customerController.customer)

module.exports=router