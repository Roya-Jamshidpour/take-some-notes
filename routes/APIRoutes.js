const router = require('express').Router();
// const path = require('path');
// const fs = require("fs");
// const uniqid = require('uniqid');

// gets database of stored notes
router.get('/notes', (req, res) => {
    fs.readFile("./db/db.json", (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data))
    })
})

// posts new note to database
router.post('api/notes', (req, res) => {

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

module.exports = router