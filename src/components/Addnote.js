import React, { useContext, useState } from 'react'
import NotesContext from '../context/notes/NotesContext';

function Addnote(props) {
    const context = useContext(NotesContext);
    const { addnote } = context
    const [note, setnote] = useState({title:"",description:"",tag:""})

    const handleClick=(e)=>{
        e.preventDefault();
        addnote(note.title,note.description,note.tag)
        setnote({title:"",description:"",tag:""})
        props.showAlert("Note Created Successfully","green")
    }

    const onchange=(e)=>{
        setnote({...note,[e.target.name]:e.target.value})
    }

    return (
        <div>
            <h1 className="text-center text-white">Add Notes</h1>
            <form>
                <div className="mb-6">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your title</label>
                    <input type="text" id="title" name='title' value={note.title} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={onchange}/>
                </div>
                <div className="mb-6">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your description</label>
                    <input type="text" id="description" name='description' value={note.description} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={onchange}/>
                </div>
                <div className="mb-6">
                    <label htmlFor="tag" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tag</label>
                    <input type="text" id="tag" name='tag' value={note.tag} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={onchange}/>
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default Addnote