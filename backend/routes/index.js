var express = require('express');
var router = express.Router();
var Blog=require("../models/controllers/blog")


router.get('/fetch/:id',Blog.fetch)
router.get('/getblog/:id',Blog.editfetch)
router.post('/editsave',Blog.editsave)
router.put('/delete_blog',Blog.delete_blog)
router.get('/all_users',Blog.all_users)

module.exports = router;
