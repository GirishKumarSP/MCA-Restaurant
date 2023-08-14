import { useState } from "react";
import NotesContext from "./NotesContext";

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial)

    //get notes
    const getnotes = async () => {
        //Todo: Api call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        });
        const json = await response.json();
        setNotes(json)
        // console.log("Note State:", json);
    }


    //Add a note
    const addnote = async (title, description, tag) => {
        //Todo: Api call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const note = await response.json();
        // console.log(note)

        //to update in client
        setNotes(notes.concat(note))
    }

    //Delete a note
    const deletenote = async (id) => {
        //Api call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        });
        //to delete in client
        // console.log("Deleting note with the id" + id)
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)

        const json = response.json();
        console.log(json)
    }

    //Edit a note
    const editnote = async (id, title, description, tag) => {
        //Api calls
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const json = response.json();
        console.log(json)

        //we can't change details in state directly in react so we create new one
        let newNotes = JSON.parse(JSON.stringify(notes))
        //logic to edit in client
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    }

    return (
        <NotesContext.Provider value={{ notes, addnote, deletenote, editnote, getnotes }}>
            {props.children}
        </NotesContext.Provider>
    )
}

export default NoteState;