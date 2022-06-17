// Dependencies 
const express = require('express');
const path = require('path');
const fs = require("fs")

const PORT = process.env.port || 3001;

const app = express();

// Server settings middleware used
// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// GET Routes for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Routes for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// API Routes
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
