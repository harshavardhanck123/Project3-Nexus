const express=require('express')
const customerController=require('../controllers/customerController')
const router=express.Router();

router.post('/new',customerController.customer)
router.get('/all',customerController.getCustomers)

module.exports=router