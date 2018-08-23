/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require("express");
var path = require("path");

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require("cfenv");

var serveStatic = require("serve-static-restify");
// create a new express server
//var app = express();

// serve the files out of ./public as our main files
// app.use(express.static(path.resolve(__dirname, ".", "public")));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, ".", "public", "index.html"));
// });
// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

const restify = require("restify"),
  restifyPlugins = require("restify-plugins"),
  passport = require("passport"),
  BearerStrategy = require("passport-azure-ad").BearerStrategy,
  config = require("./config"),
  authenticatedUserTokens = [],
  serverPort = process.env.PORT || config.serverPort;

const authenticationStrategy = new BearerStrategy(
  config.credentials,
  (token, done) => {
    let currentUser = null;

    let userToken = authenticatedUserTokens.find(user => {
      currentUser = user;
      user.sub === token.sub;
    });

    if (!userToken) {
      authenticatedUserTokens.push(token);
    }

    return done(null, currentUser, token);
  }
);

passport.use(authenticationStrategy);

const server = restify.createServer({
  name: "Azure Active Directroy with Node.js Demo"
});
server.use(restifyPlugins.authorizationParser());
server.use(passport.initialize());
server.use(passport.session());

// Serve up public/ftp folder
server.pre(serveStatic("public", { index: ["index.html", "index.htm"] }));

server.listen(serverPort);
// start server on the specified port and binding host
// app.listen(appEnv.port, "0.0.0.0", function() {
//   // print a message when the server starts listening
//   console.log("server starting on " + appEnv.url);
// });
