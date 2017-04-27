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


//CREATE teacher 
router.post('',function (req,res){
  console.log(req.body);
  var password = req.body.password;
  var firstname= req.body.fname;
  var lastname = req.body.lname;
  var middlename= req.body.mname;
  var staffuserid =req.body.staffuserid;
  sqlFunctions.selectFunction("INSERT INTO Teacher(`First_Name`, `Last_Name`, `Middle_Name`, `Password`, `StaffUserID`) VALUES ('"+firstname+"','"+lastname+"','"+middlename+"','"+password+"',"+staffuserid+")",function(response){

    res.json(response); 
  });
})


//delete teacher
router.delete('/:id',function (req ,res){
  var userid = req.params.id;
  console.log(userid)
  sqlFunctions.selectFunction("DELETE FROM Teacher WHERE ID="+userid,function(response){
    res.json(response);
  });
})

//UPDATE teacher
router.post('/update',function (req,res){
  console.log(req.body);
  var id=req.body.id;
  var password = req.body.password;
  var firstname= req.body.fname;
  var lastname = req.body.lname;
  var middlename= req.body.mname;
  sqlFunctions.selectFunction("UPDATE Teacher SET `First_Name`='"+firstname+"',`Last_Name`='"+lastname+"',`Middle_Name`='"+middlename+"',`Password`='"+password+"' WHERE ID="+id,function(response){
    res.json(response); 
  });
})



module.exports = router;