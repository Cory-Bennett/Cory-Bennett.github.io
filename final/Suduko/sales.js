var jsforce = require('jsforce');
var express = require('express');
var app = express();
var username = 'trailhead@brealmgt.com';
var password = 'Welcome1dPnhXHgcLQlw6Y7GkgFR0qqm';

var jsforce = require('jsforce');
var conn = new jsforce.Connection({
  // you can change loginUrl to connect to sandbox or prerelease env.
  loginUrl : 'https://na34.salesforce.com'
});

app.get('/', function(req, res){
  conn.login(username, password, function(err, userInfo) {
    if (err) { return console.error(err); }
    // Now you can get the access token and instance URL information.
    // Save them to establish connection next time.
    console.log(conn.accessToken);
    console.log(conn.instanceUrl);
    // logged in user property
    console.log("User ID: " + userInfo.id);
    console.log("Org ID: " + userInfo.organizationId);

    conn.query('SELECT Name FROM Account', function(err, result){
      res.send(result);
    });

  });
}) 

app.listen('8888', function(){console.log('server running')})