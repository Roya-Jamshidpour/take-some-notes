// Dependencies 
const express = require('express');
const path = require('path');
const fs = require("fs");
const util = require('util');

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

// posts new note to data
app.post('/api/notes', (req, res) => {
    const { title, text } = req.body;
// if all fields enetered then new note is saved
    if (title && text) {

    const newNote = {
        title,
        text,
        note_id: uuid(),
    };
}

    // add note to database
      
        fs.readFile('./db/db.json', 'utf8', (err, data) => {
          if (err) {
            console.error(err);
          }
            const parsedData = JSON.parse(data);
            console.log(JSON.parse(data))
          parsedData.push(newNote);
            fs.writeToFile('./db/db.json', JSON.stringify(parsedData), err => {
                if (err) {
                    console.error(err);
                res.json(parsedData)    
           
    }
        
});

// deletes note

// API Routes
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`))