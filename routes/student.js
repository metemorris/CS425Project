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

//student A checks out book B
router.post('/checkoutbook',function (req,res){
  console.log(req.body);
  var ISBN = req.body.ISBN;
  var Name = req.body.bookname;
  var school_id = req.body.bookid;
  var studentid = req.body.student_id;
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
  var studentid = req.params.id;
  sqlFunctions.selectFunction("SELECT * FROM LibraryBook WHERE school_id IN (SELECT school_id FROM Requires WHERE course_number IN (SELECT course_number FROM Takes WHERE student_ID="+studentid+"))",function(response){
    res.json(response);
  });
})


//CREATE Student
router.post('',function (req,res){
  console.log(req.body);
  var password = req.body.password;
  var firstname= req.body.fname;
  var lastname = req.body.lname;
  var middlename= req.body.mname;
  var studentid =req.body.sid;
  var advisorid=req.body.advisorid;
  sqlFunctions.selectFunction("INSERT INTO `Student`(`First_Name`, `Last_Name`, `Middle_Name`, `Password`, `Student_ID`,StaffUserID) VALUES ('"+firstname+"','"+lastname+"','"+middlename+"','"+password+"',"+studentid+","+advisorid+")",function(response){

    res.json(response); 
  });
})


//deletestudent
router.delete('/:id',function (req ,res){
  var userid = req.params.id;
  console.log(userid)
  sqlFunctions.selectFunction("DELETE FROM Student WHERE Student_ID="+userid,function(response){
    res.json(response);
  });
})

//UPDATE Student
router.post('/update',function (req,res){
  console.log(req.body);
  var userid = req.body.id;
  var password = req.body.password;
  var firstname= req.body.fname;
  var lastname = req.body.lname;
  var middlename= req.body.mname;
  var advisorid=req.body.advisorid;
  sqlFunctions.selectFunction("UPDATE Student SET `First_Name`='"+firstname+"',`Last_Name`='"+lastname+"',`Middle_Name`='"+middlename+"',`Password`='"+password+"',`StaffUserID`='"+advisorid+"' WHERE Student_ID="+userid,function(response){
    res.json(response); 
  });
})


//search a student by name
router.get('/studentname/:id',function (req,res){
  var name = req.params.id;
  sqlFunctions.selectFunction("SELECT * FROM Student WHERE First_Name LIKE '%"+name+"%' OR Last_Name LIKE '%"+name+"%'",function(response){
    res.json(response);
  });
})


module.exports = router;