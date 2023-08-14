import React, { useContext, useEffect, useState } from 'react'
import NotesContext from '../context/notes/NotesContext';
import NoteItem from './NoteItem';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';

function NotesComp(props) {
    const context = useContext(NotesContext);
    const { notes, getnotes , editnote } = context
    const [modalOpen, setModalOpen] = useState(false);
    const [Note, setNote] = useState({id:"",etitle:"",edescription:"",etag:""})
    const navigate = useNavigate();

    const onchange=(e)=>{
        setNote({...Note,[e.target.name]:e.target.value})
    }

    const handleClick=(e)=>{
        e.preventDefault();
        // addnote(note.title,note.description,note.tag)
        // console.log("hi",Note)
        editnote(Note.id,Note.etitle,Note.edescription,Note.etag)
        closeModal()
        props.showAlert("Edited Note successfully","green")
    }

    useEffect(() => {
        if(localStorage.getItem("token")){
            getnotes()
            navigate("/notes")
        }else{
            navigate("/login")
        }

         // eslint-disable-next-line
    }, [])


    const updateNote = (currentNote) => {
        setModalOpen(true);
        //we change title to etitle because it gives an error (where in currentNote consist same name title etc)
        // which is not posible to directly assign
        setNote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
    }

    const closeModal = () => {
      setModalOpen(false);
    };

    return (
        <div>
            {/* modal to display for editing the note */}
            <Modal isOpen={modalOpen} onClose={closeModal} Note={Note} onchange={onchange} handleclick={handleClick}/>

            <h1 className="text-center text-white">My Notes</h1>
            <div className='flex flex-wrap justify-center'>
                {/* if we don't have anything in else part we use && */}
                {notes.length === 0 && "No Notes to disply "}
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} updateNote={updateNote} showAlert={props.showAlert}/>
                })}
            </div>
        </div>
    )
}

export default NotesComp