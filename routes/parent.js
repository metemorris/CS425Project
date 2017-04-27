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



//CREATE PARENT works
router.post('',function (req,res){
  console.log(req.body);
  var password = req.body.password;
  var firstname= req.body.fname;
  var lastname = req.body.lname;
  var middlename= req.body.mname;
  var studentid =req.body.sid;
  sqlFunctions.selectFunction("INSERT INTO `ParentGuardian`(`First_Name`, `Last_Name`, `Middle_Name`, `Password`, `Student_ID`) VALUES ('"+firstname+"','"+lastname+"','"+middlename+"','"+password+"',"+studentid+")",function(response){

    res.json(response); 
  });
})


//deleteparent
router.delete('/:id',function (req ,res){
  var userid = req.params.id;
  console.log(userid)
  sqlFunctions.selectFunction("DELETE FROM ParentGuardian WHERE ParentGuardian_ID="+userid,function(response){
    res.json(response);
  });
})

//UPDATE PARENT
router.post('/update',function (req,res){
  console.log(req.body);
  var userid = req.body.id;
  var password = req.body.password;
  var firstname= req.body.fname;
  var lastname = req.body.lname;
  var middlename= req.body.mname;
  sqlFunctions.selectFunction("UPDATE `ParentGuardian` SET `First_Name`='"+firstname+"',`Last_Name`='"+lastname+"',`Middle_Name`='"+middlename+"',`Password`='"+password+"' WHERE ParentGuardian_ID="+userid,function(response){
    res.json(response); 
  });
})




module.exports = router;