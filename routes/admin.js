var mysql      = require('mysql');
const express = require("express");
const router = express.Router();
const sqlFunctions = require("./functions/sqlFunctions.js");


//update admin password
router.post('/password',function (req,res){
  console.log(req.body);
  var id= req.body.admin_id
  var password = req.body.password
  console.log(id+password)
  sqlFunctions.selectFunction("UPDATE Admin SET Password='"+password+"' WHERE Admin_ID="+id,function(response){

    res.json(response);
  });
})

//display the admins
router.get('',function (req,res){
  sqlFunctions.selectFunction("SELECT * from Admin",function(response){
    res.json(response);
  });
})

//getanadminspassword
router.get('/password/:id',function (req,res){
  var userid = req.params.id;
  console.log(userid)
  sqlFunctions.selectFunction("SELECT password FROM Admin WHERE admin_ID="+userid,function(response){
    res.json(response);
  });
})




//delete admin
router.delete('/:id',function (req,res){
  var userid = req.params.id;
  console.log(userid)
  sqlFunctions.selectFunction("DELETE FROM Admin WHERE admin_ID="+userid,function(response){
    res.json(response);
  });
})
//add admin
router.post('',function (req,res){
  console.log(req.body);
  var id= req.body.admin_id
  var password = req.body.password
  console.log(id+password)
  sqlFunctions.selectFunction("INSERT INTO Admin VALUES ("+id+",'"+password+"')",function(response){

    res.json(response);
  });
})


module.exports = router;
