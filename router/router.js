const express= require("express");
const router= express.Router();


const UsersController = require('../controller/UsersController.js');




router.post('/create',UsersController.create);
router.get('/find/:name',UsersController.find);
router.get('/findOne/:name',UsersController.findOne);













module.exports=router