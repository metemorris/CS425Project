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

module.exports = router;