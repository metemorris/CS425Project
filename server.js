//files needed
var mysql      = require('mysql');
var adminRoutes = require('./routes/admin.js');
var express    = require("express");
var jsonParser = require("body-parser");
var path = require("path");
//creating express
var app = express();

app.use(jsonParser.urlencoded({
    extended: true
}))

app.use(jsonParser.json());
//directing webpage to html file in public
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);

app.use(function (req, res, next) {
   var err = new Error("Error!");
   err.status = 404;
   next(err);
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        error: err.message,
        status: err.status
    });
});


/*
 |
 | DEPLOYMENT
 |
 */

var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log("Hello, Server has started!");
});

/*
//sample SELECT lookup
connection.query('SELECT * from Admin', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

//sample insert into
connection.query('INSERT INTO `Admin`(`Admin_ID`, `Password`) VALUES ("Aqueel","MALYALAM")', function(err) {
  if (!err)
    console.log('The solution is: ');
  else
    console.log('Error while performing Query.');
});

connection.end();
*/
