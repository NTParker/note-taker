const router = require("express").Router();
const { notes } = require("../../Develop/db/db.json");
const { createNote, deleteNote } = require("../../lib/notes");

router.get("/note", (req, res) => {
  let saved = notes;
  res.json(saved);
});

router.post("./note", (req, res) => {
  req.body.id = notes.length.toString();
  let note = createNote(req.body, notes);
  res.json(notes);
});

router.delete("/note/:id", (req, res) => {
  deleteNote(notes, req.params.id);
  res.json(notes);
});

module.exports = router;
