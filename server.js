/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
var path = require('path');
var http = require('http');
var port = process.env.PORT || 8000; // first change

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
// var cfenv = require('cfenv');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(path.join(__dirname, '.', 'public')));
app.get('*', (req, res) => {
  console.log('dzoooo');
  res.sendFile(path.join(__dirname, '.', 'public', 'index.html'));
}); 
//app.use('/',express.static(path.resolve(__dirname, '.', 'public')));
// get the app environment from Cloud Foundry
// var appEnv = cfenv.getAppEnv();

// var server = http.createServer(app);

// start server on the specified port and binding host
// app.listen(appEnv.port, '0.0.0.0', function() {
//   // print a message when the server starts listening
//   console.log("server starting on " + appEnv.url);
// });

app.listen(port, function () {
  console.log('Server is running on', port);
});
