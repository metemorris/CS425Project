var mysql      = require('mysql');
const express = require("express");
const router = express.Router();
const sqlFunctions = require("./functions/sqlFunctions.js");

//display the students

router.get('',function (req,res){
  sqlFunctions.selectFunction("SELECT * from Student",function(response){
    res.json(response);
  });
})


// get one student

router.get('/:id',function (req,res){
  var userid = req.params.id;
  console.log(userid)
  sqlFunctions.selectFunction("SELECT * FROM Student WHERE student_id="+userid,function(response){
    res.json(response);
  });
})



// get checked out books



// list classes
router.get('/classes/:id',function (req,res){
  var userid = req.params.id;
  console.log(userid)
  sqlFunctions.selectFunction("SELECT * FROM Class WHERE course_number IN (SELECT course_number FROM Takes WHERE student_ID="+userid+")",function(response){
    res.json(response);
  });
})


// see parents
router.get('/parents/:id',function (req,res){
  var userid = req.params.id;
  console.log(userid)
  sqlFunctions.selectFunction("SELECT * FROM ParentGuardian WHERE student_ID="+userid,function(response){
    res.json(response);
  });
})


module.exports = router;