// Require the 'router.js' file
var router = require('./router.js');

// Problem:		We need a simple way to look at a user's badge count and JavaScript points from a web browser
// Solution: 	Use NodeJS to perform the profile look ups and serve our template via HTTP


// Create a web server
const http = require('http');
const https = require('https');

const hostname = 'localhost';
const port = 1337;

http.createServer(function(req, res) {
	router.home(req, res);
	router.user(req, res);
}).listen(port, hostname)
console.log('Server running at http://$'+ hostname + ':' + port + '/');
