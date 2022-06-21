const router = require('express').Router();
const getNotes = require('../db/store');
const addNote = require('../db/store')

// GET "/api/notes" responds with all notes from the database
router.get('/notes', (req, res) => {
    getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

router.post('/notes', (req, res) => {
    addNote(req.body)
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
// router.delete('/notes/:id', (req, res) => {
//   store
//     .removeNote(req.params.id)
//     .then(() => res.json({ ok: true }))
//     .catch((err) => res.status(500).json(err));
// });

module.exports = router;
