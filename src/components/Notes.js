import React from 'react'
import NotesComp from './NotesComp'
import Addnote from './Addnote'


function Notes(props) {
    return (
        <div className='min-h-screen bg-gray-600 p-5'>
            <Addnote showAlert={props.showAlert}/>
            <NotesComp showAlert={props.showAlert}/>
        </div>
    )
}

export default Notes