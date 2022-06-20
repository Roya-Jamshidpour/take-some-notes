const router = require('express').Router();
const store = require('../db/store');

// GET "/api/notes" responds with all notes from the database
router.get('/notes', (req, res) => {
  store
    .getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

router.post('/notes', (req, res) => {
  store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
router.delete('/notes/:id', (req, res) => {
  store
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});


module.exports = router;
// router.get('/notes', (req, res) => {
//     fs.readFile("./db/db.json", (err, data) => {
//         if (err) throw err;
//         res.json(JSON.parse(data))
//     })
// })

// // posts new note to database
// router.post('api/notes', (req, res) => {

//     const { title, text } = req.body;
//     // if all fields enetered then new note is saved
//     if (title && text) {

//         const newNote = {
//             title,
//             text,
//             id: uuid(),

//         };
//     }
//         const parseData = JSON.parse(newNote);
//         console.log(JSON.parse(data));
//         parseData.push(newNote);
        
//         fs.writeFile("./db/db.json", JSON.stringify(parseData), err => {
//             if (err) throw err;
//             res.json(parseData)

//         })
//     });

