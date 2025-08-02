const express= require("express");
const router= express.Router();

const PostsController = require('../controller/PostsController.js');
const UsersController = require('../controller/UsersController.js');
const ProductController = require('../controller/ProductController.js');


router.post('/login',UsersController.loginUsers);
router.post('/SinUpUsers',UsersController.SinUpUsers);

router.get('/posts',PostsController.GetAllPosts)

router.get('/add_product',ProductController.add_product);










module.exports=router