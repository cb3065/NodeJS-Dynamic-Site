// Require the 'router.js' file
var router = require('./router.js');

// Problem:		We need a simple way to look at a user's badge count and JavaScript points from a web browser
// Solution: 	Use NodeJS to perform the profile look ups and serve our template via HTTP


// Create a web server
const http = require('http');

const hostname = 'localhost';
const port = 1337;

http.createServer(function(req, res) {
	router.home(req, res);
	router.user(req, res);
}).listen(port, hostname)
console.log('Server running at http://$'+ hostname + ':' + port + '/');





// Function that handles the reading of files and merge in values
	// read from file and get a string
		// merge values into string