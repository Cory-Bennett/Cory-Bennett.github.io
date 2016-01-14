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
    conn.query('SELECT Owner FROM Contact', function(err, result){
      var names = result.records.map(function(item){
        return item.Name;
      });
      // names.each(function(item) {
      //   $(body).append('<div>' + item + '</div>')
      // });
      res.send(names);
    });
  });
}) 
// var pg = require('pg');
// pg.connect(process.env.postgres://eihehaoxkmmmpt:H9alk1QC4G7CcHyrJPNviE2Z9M@ec2-54-204-8-224.compute-1.amazonaws.com:5432/dcc9tudratrchu, function(err, client) {
//   if (err) throw err;
//   console.log('Connected to postgres! Getting schemas...');
//   client
//     .query('SELECT Name FROM Account');
//     .on('row', function(row) {
//       console.log(JSON.stringify(row));
//     });
// });
app.listen('8888', function(){console.log('server running')})