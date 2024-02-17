// Create web server
// Create a new web server using Express.js, a popular web server library for Node.js.
// The web server should respond to a GET request to /comments with an array of comments.
// Use the following array of comment objects as the response body:
// [
//   {
//     username: 'dickeyxxx',
//     comment: 'this is a test'
//   },
//   {
//     username: 'mbostock',
//     comment: 'this is another test'
//   }
// ]
// Finally, use the app object to listen on port 4001.

var express = require('express');
var app = express();

app.get('/comments', function(req, res) {
  res.json([
    {
      username: 'dickeyxxx',
      comment: 'this is a test'
    },
    {
      username: 'mbostock',
      comment: 'this is another test'
    }
  ]);
});

app.listen(4001);