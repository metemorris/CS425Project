var mysql      = require('mysql');
const express = require("express");
const router = express.Router();
const sqlFunctions = require("./functions/sqlFunctions.js");


//get parents password
router.get('/password/:id',function (req,res){
  var userid = req.params.id;
  console.log(userid)
  sqlFunctions.selectFunction("SELECT password FROM ParentGuardian WHERE parentguardian_ID="+userid,function(response){
    res.json(response);
  });
})

//display checked out books(pass parent id)
router.get('/books/:id',function (req,res){
  var userid = req.params.id;
  console.log(userid)
  sqlFunctions.selectFunction("SELECT * FROM CheckedOutBooks Where Student_ID IN (SELECT Student_ID FROM ParentGuardian WHERE ParentGuardian_ID="+userid+" )",function(response){
    res.json(response);
  });
})



//CREATE PARENT
router.post('',function (req,res){
  console.log(req.body);
  var id= req.body.parent_id;
  var password = req.body.password;
  var firstname= req.body.fname;
  var lastname = req.body.lname;
  var middlename= req.body.mname;
  var studentid =req.body.sid;
  console.log(id+password)
  sqlFunctions.selectFunction("INSERT INTO ParentGuardian VALUES ("+id+",'"+firstname+",'"+lastname+",'"+middlename+",'"+password+",'"+studentid+")",function(response){

    res.json(response); 
  });
})


//UPDATE PARENT

module.exports = router;