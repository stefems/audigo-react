// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const loginController = require('./controllers/loginController');


// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// // Point static path to public
app.use(express.static(path.join(__dirname, './')));

app.use("/login", loginController);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
	console.log(req.originalUrl);
	res.redirect("localhost:3001");
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
