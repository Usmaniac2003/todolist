const express=require('express');
const {HelloWorld}=require('../controllers/example');
const router=express.Router();



//example routes
router.get('/hello',HelloWorld);


module.exports=router;