'use strict';

// Load and instantiate Express
const express = require('express');
const app = express();

// Define a port
const PORT = process.env.PORT || 3000;

// Include the static resources as an argument for app.use()
app.use(express.static('./public'));

// Routes
app.get('*', (request, response) => response.sendFile('index.html', {root: './Public'}));
app.get('/', (request, response) => response.sendFile('index.html', {root: './Public'}));
app.get('/tech', (request, response) => response.sendFile('index.html', {root: './Public'}));
app.get('/projects', (request, response) => response.sendFile('index.html', {root: './Public'}));
app.get('/about', (request, response) => response.sendFile('index.html', {root: './Public'}));

// Logs a console message to say which port the server has begun using
app.listen(PORT, function() {
  console.log('app is running on localhost:3000');
});
