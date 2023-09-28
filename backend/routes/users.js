var express = require('express');
var router = express.Router();
var User=require("../models/controllers/user")
var Blog=require("../models/controllers/blog")


router.post("/signup",User.create_user);// for creating the user
router.post("/login",User.login)
router.post('/addblog',Blog.create_blog)
router.get('/username/:user_id',User.username)





module.exports = router;
