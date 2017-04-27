var mysql      = require('mysql');
const express = require("express");
const router = express.Router();
const sqlFunctions = require("./functions/sqlFunctions.js");

//list all books


//list all books checked out
router.get('/checkedoutbooks',function (req,res){
  var userid = req.params.id;
  console.log(userid)
  sqlFunctions.selectFunction("SELECT * FROM CheckedOutBooks",function(response){
    //response.
    res.json(response);
  });
})


//search a book by name
router.get('/bookname/:id',function (req,res){
  var bookname = req.params.id;
  sqlFunctions.selectFunction("SELECT * FROM LibraryBook WHERE name LIKE '%"+bookname+"%'",function(response){
    res.json(response);
  });
})


//remove checked out book
router.post('/checkin',function (req,res){
  var sid= req.body.student_id
  var bid = req.body.bookid
  console.log(sid+":"+bid)
  sqlFunctions.selectFunction("DELETE FROM CheckedOutBooks WHERE Student_ID="+sid+" AND School_ID="+bid,function(response){
    //res.json(response);
  });
  console.log("Checked the Book Out");
  sqlFunctions.selectFunction("UPDATE LibraryBook SET no_checked_out=no_checked_out-1 WHERE School_ID ="+bid,function(response){
    res.json(response);
  });

})

//get overdue books from student id
router.get('/overduebooks/:id',function (req,res){
  var studentid = req.params.id;
  sqlFunctions.selectFunction("SELECT COUNT(*) FROM CheckedOutBooks WHERE Student_ID="+studentid+" AND (DATE(NOW()) > DATE(DueDate)) GROUP BY Student_ID ",function(response){
    res.json(response);
  });
})

//list all overduebooks
router.get('/overduebooks',function (req,res){
  var studentid = req.params.id;
  sqlFunctions.selectFunction("SELECT * FROM CheckedOutBooks WHERE (DATE(NOW()) > DATE(DueDate))",function(response){
    res.json(response);
  });
})

//list all amountdue
router.get('/amountdue',function (req,res){
  sqlFunctions.selectFunction("SELECT st.First_Name as stFname,st.Middle_Name as stMname,st.Last_Name as stLname,pg.First_Name as pgFname,pg.Middle_Name as pgMname,pg.Last_Name as pgLname,COUNT(*)*15 as AmountDue FROM CheckedOutBooks cb,ParentGuardian pg,Student st WHERE cb.Student_ID=pg.Student_ID AND st.Student_ID=cb.Student_ID AND st.Student_ID=pg.Student_ID AND (DATE(NOW()) > DATE(cb.DueDate)) GROUP BY cb.Student_ID",function(response){
    res.json(response);
  });
})


//add book
router.post('/addbooklib',function (req,res){
  console.log(req.body);
  var school_id = req.body.school_id;
  var isbn = req.body.isbn;
  var name = req.body.name;
  var totalno = req.body.totalno;
  sqlFunctions.selectFunction("INSERT INTO `LibraryBook`(`School_ID`, `ISBN`, `Name`, `Total_Number`, `No_Checked_Out`) VALUES ("+school_id+","+isbn+",'"+name+"',"+totalno+",0)",function(response){
    res.json(response); 
  });
})
// remove book


module.exports = router;