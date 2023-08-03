const express = require('express')
const router = express.Router();
const fetchuser = require("../middleware/fetchuser")
const Notes = require("../Models/Notes")
const { body, validationResult } = require('express-validator');

// Route 1) Get all notes using: GET "/api/notes/fetchallnotes". login require
router.get("/fetchallnotes", fetchuser,
    async (req, res) => {
        try {
            const notes = await Notes.find({ user: req.user.id })
            res.json(notes)
        } catch (error) {
            console.log("Error user login:", error)
            res.status(500).send("Internal server error")
        }
    }
)

// Route 2) Add a new note using: POST "/api/notes/addnote". login require
router.post("/addnote", fetchuser, [
    body('title', 'enter a valid title').isLength({ min: 3 }),
    body('description', 'description must be at lease 5 characters').isLength({ min: 5 })
],
    async (req, res) => {

        try {
            const { title, description, tag } = req.body;

            //if there are errors return bad request and error message
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ error: errors.array() })
            }

            // create the Note object with data from request body and user id of logged in user
            const note = new Notes({
                title, description, tag, user: req.user.id
            })

            const saveNote = await note.save()

            res.json(saveNote)
        } catch (error) {
            console.log("Error user login:", error)
            res.status(500).send("Internal server error")
        }
    }
)

// Route 3) update an exsisting note using: PUT "/api/notes/updatenote". login require
router.put("/updatenote/:id", fetchuser,
    async (req, res) => {
        const { title, description, tag } = req.body;

        try {
            //create new note object
            const newNote = {};
            if (title) { newNote.title = title }
            if (description) { newNote.description = description }
            if (tag) { newNote.tag = tag }

            //find the note to be updated and update it
            let note = await Notes.findById(req.params.id);
            if (!note) { return res.status(400).send("Not Found") }

            //check if the user attempting to edit is the same person logged in and he is only updating his own note
            if (note.user.toString() !== req.user.id) {
                return resonse.status(401).send("Not Allowed")
            }

            //find the note to be updated and pass new values as args
            note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })

            res.json({ note });
        } catch (error) {
            console.log("Error user login:", error)
            res.status(500).send("Internal server error")
        }
    }
)

// Route 4) delete an exsisting note using: Delete "/api/notes/deletenote". login require
router.delete("/deletenote/:id", fetchuser,
    async (req, res) => {

        try {
            //find the note to be deleted and delete it
            let note = await Notes.findById(req.params.id);
            if (!note) { return res.status(400).send("Not Found") }

            //Allow deletion only if the user ownes this note
            if (note.user.toString() !== req.user.id) {
                return resonse.status(401).send("Not Allowed")
            }

            //find the note to be updated and pass new values as args
            note = await Notes.findByIdAndDelete(req.params.id)

            res.json({ "Success": "Note has been deleted", note: note });
        } catch (error) {
            console.log("Error user login:", error)
            res.status(500).send("Internal server error")
        }

    }
)

module.exports = router