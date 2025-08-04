const express= require("express");
const router= express.Router();

const PostsController = require('../controller/PostsController.js');
const UsersController = require('../controller/UsersController.js');
const ProductController = require('../controller/ProductController.js');
const Check =require('../middleware/Check.js');
const Validation = require('../middleware/Validation.js');


router.post('/login',UsersController.loginUsers);
router.post('/SinUpUsers',UsersController.SinUpUsers);

router.get('/posts',PostsController.GetAllPosts)

router.get('/add_product',ProductController.add_product);

router.post('/users/salarys',Check.CheckSalayrs,UsersController.GetAllUsersSalarys);

router.post('/validation/loginUsers',Validation.LoginValidation,UsersController.loginUsers);
router.post('/validation/registeringUsers',Validation.RegisteringValidation,UsersController.RegisteringUsers);
router.post('/validation/usersData',Validation.usersDataValidation,UsersController.UsersData);








module.exports=router