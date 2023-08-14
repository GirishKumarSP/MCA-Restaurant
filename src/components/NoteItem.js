import React, { useContext } from 'react'
import NotesContext from '../context/notes/NotesContext';

function NoteItem(props) {
    const context = useContext(NotesContext); 
    const { deletenote } = context

    const { note,updateNote } = props;
    return (
        <div className='w-3/12 m-3'>
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className='flex items-center'>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{note.title}</h5>
                <i className="fa-regular fa-trash-can text-white mx-3" onClick={()=>{deletenote(note._id);props.showAlert("Deleted Note Successfully","green") }}></i>
                <i className="fa-regular fa-pen-to-square text-white" onClick={()=>{updateNote(note)}}></i>
            </div>
                <p className="font-normal text-gray-700 dark:text-gray-400">{note.description}</p>
            </div>
        </div>
    )
}

export default NoteItem