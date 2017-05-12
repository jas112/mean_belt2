// MEANProject Server JS___

console.log('starting MEANTest2 Server!!');

var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');
var root = __dirname;
var port = process.env.Port || 8000;
var app = express();

// // Session configuration
var sessionConfig = {
    secret:'MEANprojectSecretKey', // Secret name for decoding secret and such
    resave:false, // Don't resave session if no changes were made
    saveUninitialized: true, // Don't save session if there was nothing initialized
    name:'MEAN_project_Cookie', // Sets a custom cookie name
    cookie: {
    secure: false, // This need to be true, but only on HTTPS
    httpOnly:false, // Forces cookies to only be used over http
    maxAge: 360000000
  }
}

app.use(session(sessionConfig));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(root, 'client')));
app.use(express.static(path.join(root, 'bower_components')));


// the stuff above is manditory in placement!!!!!

// Require mongoose before routes!!!!!!

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.listen(port, function(){
  console.log('the server is running on ${port}.')
});
