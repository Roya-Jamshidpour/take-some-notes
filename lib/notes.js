const router = require('express').Router();
const path = require('path');
const fs = require("fs");

router.get('/notes', (req, res) => {
        fs.readFile("./db/db.json", (err, data) => {
            if (err) throw err;
            res.json(JSON.parse(data))
        })
    })
    
    // posts new note to database
    router.post('api/notes', (req, res) => {
    
    
            const newNote = {
                title,
                text,
                id: uuid(),
    
            };
        
            const parseData = JSON.parse(newNote);
            console.log(JSON.parse(data));
            parseData.push(newNote);
            
            fs.writeFile("./db/db.json", JSON.stringify(parseData), err => {
                if (err) throw err;
                res.json(parseData)
    
            })
        });
    
    