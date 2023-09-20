var express = require('express');
var router = express.Router();
var User=require("../models/controllers/user")
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post("/signin",User.create_user);// for creating the user

module.exports = router;
