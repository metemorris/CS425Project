var mysql      = require('mysql');
const express = require("express");
const router = express.Router();
const sqlFunctions = require("./functions/sqlFunctions.js");

//get students password 
router.get('/password/:id',function (req,res){
  var userid = req.params.id;
  console.log(userid)
  sqlFunctions.selectFunction("SELECT password FROM Student WHERE student_ID="+userid,function(response){
    res.json(response);
  });
})



// get checked out books

router.get('books/:id',function (req,res){
  var userid = req.params.id;
  console.log(userid)
  sqlFunctions.selectFunction("SELECT * FROM CheckedOutBooks Where Student_ID ="+userid,function(response){
    res.json(response);
  });
})

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

//student A checks out book B


//allow student A to sign up for Class B
router.post('/class',function (req,res){
  console.log(req.body);
  var studentid= req.body.student_id
  var courseid = req.body.course_number
  console.log(id+password)
  sqlFunctions.selectFunction("INSERT INTO Takes VALUES ("+studentid+",'"+coursenumber+"')",function(response){

    res.json(response);
  });
})

//view which books are required for a students class




module.exports = router;