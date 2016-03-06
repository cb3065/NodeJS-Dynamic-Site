// Problem:		We need a simple way to look at a user's badge count and JavaScript points from a web browser
// Solution: 	Use NodeJS to perform the profile look ups and serve our template via HTTP

// 1.	create a web server
const http = require('http');

const hostname = 'localhost';
const port = 1337;

http.createServer(function(req, res) {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	setInterval(function(){
		res.write(new Date() + '\n');
	},1000);
	//res.end('Hello World\n');
}).listen(port, hostname)
console.log('Server running at http://$'+ hostname + ':' + port + '/');


// 2.	handle the HTTP route GET / and POST / i.e. Home
	// if url == "/" && GET
		// show search
	// if url == "/" && POST
		// redirect to /:username

// 3.	handle the HTTP route GET /:username i.e. /chalkers
	// if url == "/....."
		// get json from Treehouse
			// on "end"
				// show profile
			// on "error"
				// show error

// 4.	function that handles the reading of files and merge in values
	// read from file and get a string
		// merge values into string