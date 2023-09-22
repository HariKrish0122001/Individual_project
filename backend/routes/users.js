var express = require('express');
var router = express.Router();
var User=require("../models/controllers/user")
var Blog=require("../models/controllers/blog")
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post("/signup",User.create_user);// for creating the user
router.post("/login",User.login)
router.post('/addblog',Blog.create_blog)


///blogs
router.get('/fetch/:id',Blog.fetch)
router.get('/getblog/:id',Blog.editfetch)
router.post('/editsave',Blog.editsave)

module.exports = router;
