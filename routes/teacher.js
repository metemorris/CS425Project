var mysql      = require('mysql');
const express = require("express");
const router = express.Router();
const sqlFunctions = require("./functions/sqlFunctions.js");
//get teachers password
router.get('/password/:id',function (req,res){
  var userid = req.params.id;
  console.log(userid)
  sqlFunctions.selectFunction("SELECT password FROM Teacher WHERE ID="+userid,function(response){
    res.json(response);
  });
})

//Teacher:see classes you are teaching
router.get('/classes/:id',function (req,res){
  var userid = req.params.id;
  console.log(userid)
  sqlFunctions.selectFunction("SELECT * FROM Class WHERE ID="+userid,function(response){
    res.json(response);
  });
})


//Teacher: see all students in your class

module.exports = router;