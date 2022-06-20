const router = require('express').Router();
const path = require('path');
const fs = require("fs");
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the notes
router.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI note
router.post('/', (req, res) => {
  console.log(req.body);

  const { title, topic, tip } = req.body;

 // posts new note to database
    router.post('/', (req, res) => {
        console.log(req.body)
    
        const { title, text } = req.body;

        if (req.body) {
            const newNote = {
                title,
                text,
                id: uuid(),
    
            };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully 🚀`);
  } else {
    res.error('Error in adding note');
  }
    })
});

module.exports = router
// });
// router.get('/notes', (req, res) => {
//         fs.readFile("../db/db.json", (err, data) => {
//             if (err) throw err;
//             res.json(JSON.parse(data))
//         })
//     })
    
//     // posts new note to database
//     router.post('api/notes', (req, res) => {
    
//             const newNote = {
//                 title,
//                 text,
//                 id: uuid(),
    
//             };
        
//             const parseData = JSON.parse(newNote);
//             console.log(JSON.parse(data));
//             parseData.push(newNote);
            
//             fs.writeFile("../db/db.json", JSON.stringify(parseData), err => {
//                 if (err) throw err;
//                 res.json(parseData)
    
//             })
//         });
    
    