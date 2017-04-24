var mysql      = require('mysql');
const express = require("express");
const router = express.Router();
const sqlFunctions = require("./functions/sqlFunctions.js");
var dateTime = require('node-datetime')

//get students password 
router.get('/password/:id',function (req,res){
  var userid = req.params.id;
  console.log(userid)
  sqlFunctions.selectFunction("SELECT password FROM Student WHERE student_ID="+userid,function(response){
    res.json(response);
  });
})



// get checked out books

router.get('/books/:id',function (req,res){
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

/* CHECK THIS FUNCTION LATER IT PROBABLY DOESNT WORK */
//student A checks out book B
router.post('/checkoutbook',function (req,res){
  console.log(req.body);
  var ISBN = req.body.ISBN;
  var Name = req.body.bookname;
  var school_id = req.body.bookid;
  var studentid= req.body.student_id;
  var duedate = req.body.due_date; 
  var dateTime = require('node-datetime');
  var dt = dateTime.create();
  var formatted = dt.format('Y-m-d');
  console.log(formatted);
  var todaydate = formatted.toString();
  console.log(todaydate);
  sqlFunctions.selectFunction("INSERT INTO CheckedOutBooks VALUES ('"+Name+"','"+school_id+"',"+ISBN+",'"+studentid+"','"+todaydate+"','"+duedate+"')",function(response){
    //res.json(response);
  });
  console.log("INSERTED THE BOOK");
  sqlFunctions.selectFunction("UPDATE LibraryBook SET no_checked_out=no_checked_out+1 WHERE School_ID ="+school_id,function(response){
    res.json(response);
  });
})

//allow student A to sign up for Class B
router.post('/class',function (req,res){
  console.log(req.body);
  var studentid= req.body.student_id
  var coursenumber = req.body.course_number
  console.log(studentid+coursenumber)
  sqlFunctions.selectFunction("INSERT INTO Takes VALUES ("+studentid+",'"+coursenumber+"')",function(response){

    res.json(response);
  });
})

//view which books are required for a students class
router.get('/classbooks/:id',function (req,res){
  var classid = req.params.id;
  sqlFunctions.selectFunction("SELECT * FROM LibraryBook WHERE school_id IN (SELECT school_id FROM Requires WHERE course_number="+classid+")",function(response){
    res.json(response);
  });
})



module.exports = router;