// Dependencies 
const cool = require('cool-ascii-faces');
const express = require('express');
const path = require('path');
const fs = require("fs");
const uniqid = require('uniqid');
const app = express();
const PORT = process.env.port || 3001;

// Server settings middleware used
// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', api);
app.use(express.static('public'));

// GET Routes for homepage
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);
// GET Routes for notes page
app.get('api/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// gets database of stored notes
app.get('/notes', (req, res) => {
    fs.readFile("./db/db.json", (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data))
    })
})

// posts new note to database
app.post('api/notes', (req, res) => {

    const { title, text } = req.body;
    // if all fields enetered then new note is saved
    if (title && text) {

        const newNote = {
            title,
            text,
            id: uuid(),

        };
    }
        const parseData = JSON.parse(newNote);
        console.log(JSON.parse(data));
        parseData.push(newNote);
        fs.writeFile("./db/db.json", JSON.stringify(parseData), err => {
            if (err) throw err;
            res.json(parseData)

        })
    });

// deletes note

// API Routes
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`))