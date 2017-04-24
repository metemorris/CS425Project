var mysql      = require('mysql');
const express = require("express");
const router = express.Router();
const sqlFunctions = require("./functions/sqlFunctions.js");

//list all books


//list all all students who checked a certain book


//search a book by name
router.get('/bookname/:id',function (req,res){
  var bookname = req.params.id;
  sqlFunctions.selectFunction("SELECT * FROM LibraryBook WHERE name LIKE '%"+bookname+"%'",function(response){
    res.json(response);
  });
})


module.exports = router;