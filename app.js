var express = require('express');//#1
var app = express();   //#1app has the all the methods of express able to be access
// console.log("Hello world") //#1for testing var app

//#9
var dataFile = require('./data.json')

// //#10 Test #The way of access to Beverages you drink in a week
// console.log(dataFile.cfa.topic);
//
// //#12 Test #change 10, change data.js to data.json
// console.log(dataFile.cfa.topic);



// #11 Another way of defferent things and give them a name
// console.log(dataFile.SayHello());

//#13 activate commented out codes
//#9.5 comment 5.5 to 3 out and
//#5.5view engine setup
app.set('view engine', 'ejs');


//#sepecify routes
// //home route //#2
// app.get('/', function(req, res){  //#get method #paratemers request(get request) reqonse(callback function) are init
//  res.send("<h2>This is a server response on the home page</h2>")
// });

//#6 home routes #after creating views folder and home.ejs
app.get('/', function(req, res){
 res.render('../views/home', {DataVariable: data});
});


//not found //#5  #deleted 4
app.get('*', function(req, res){   //# "*" represents any route
 res.send("This is not the page that you are looking for")
});
//


//server calling //#3
app.listen(3000, function(){
  console.log("The application is running on the localhost:3000")
});
