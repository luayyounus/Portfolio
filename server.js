'use strict';

// Load and instantiate Express
const express = require('express');
const app = express();

// Define a port
const PORT = process.env.PORT || 3000;

// Include the static resources as an argument for app.use()
app.use(express.static('./public'));

// Routes
app.get('/', function(request, response) {
  response.sendFile('public/index.html', {root: '.'});
});

app.get('*', function(request, response) {
  response.send('public/index.html');
});

// Logs a console message to say which port the server has begun using
app.listen(PORT, function() {
  console.log('app is running on localhost:3000');
});
