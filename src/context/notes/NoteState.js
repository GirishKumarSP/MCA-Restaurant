import { useState } from "react";
import NotesContext from "./NotesContext";

const NoteState = (props) => {

    //user section

    //temprovary list of dishs (dishlist,dishcard)
    //TODO:http call to fill it
    const dishesData = {
        "dishes": [
            {
                "dishName": "Spaghetti Carbonara",
                "price": "$12.99",
                "ingredients": "Pasta, eggs, bacon, parmesan cheese, black pepper",
                "imageUrl": "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3BhZ2hldHRpJTIwQ2FyYm9uYXJhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            },
            {
                "dishName": "Chicken Teriyaki",
                "price": "$15.50",
                "ingredients": "Chicken breast, teriyaki sauce, rice, vegetables",
                "imageUrl": "https://images.unsplash.com/photo-1609183480237-ccbb2d7c5772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hpY2tlbiUyMFRlcml5YWtpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            },
            {
                "dishName": "Margherita Pizza",
                "price": "$10.95",
                "ingredients": "Pizza dough, tomato sauce, mozzarella cheese, fresh basil",
                "imageUrl": "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TWFyZ2hlcml0YSUyMFBpenphfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            },
            {
                "dishName": "Caesar Salad",
                "price": "$8.75",
                "ingredients": "Romaine lettuce, croutons, parmesan cheese, Caesar dressing",
                "imageUrl": "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2Flc2FyJTIwU2FsYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            },
            {
                "dishName": "Beef Burger",
                "price": "$13.25",
                "ingredients": "Beef patty, lettuce, tomato, onion, cheese, bun",
                "imageUrl": "https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEJlZWYlMjBCdXJnZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            }
        ]
    };

    //these sates are used for managing dish name and its count (dishlist,dishcard)
    const [dishCount, setDishCount] = useState([])
    const [uniqueDishes, setuniqueDishes] = useState(null)

    //states for tracking the timings of Restaurant and seting all order details (Reservation)
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        seating: '',
        occasion: '',
        total: '',
    });
    const [availableTimes, setAvailableTimes] = useState([
        "01:00",
        "01:30",
        "02:00",
        "02:30",
        "03:00",
        "03:30",
        "04:00",
        "04:30",
        "05:00"
    ])

    //Add a Dine in order by customer
    const addorder = async (foodList, orderDetails) => {
        //Todo: Api call
        const response = await fetch(`${host}/api/orders/addorder`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ foodList, orderDetails }),
        });
        const note = await response.json();
        console.log(note)
    }

    //Add a feedback by customer
    const addfeedback = async (name, email, feedback, rating) => {
        //Todo: Api call
        const response = await fetch(`${host}/api/feedback/addFeedback`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ name, email, feedback, rating }),
        });
        const note = await response.json();
        console.log(note)
    }



    //-------------------------------------------------------------------------------------
    //Admin section

    //state to hold all orders for admin
    const [AdminDineinOrdersFetch, setAdminDineinOrdersFetch] = useState([])
    const [AdminFeedbackFetch, setAdminFeedbackFetch] = useState([])

    // get all orders of all users for admin only
    const getallordersofusers = async () => {
        // Api call
        const response = await fetch(`${host}/api/adminAccess/fetchallorders`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("Admintoken")
            }
        });
        const json = await response.json();
        setAdminDineinOrdersFetch(json)
        // console.log("Note State:", json);
    }

    // get all feedbacks of all users for admin only
    const getallfeedbacksofusers = async () => {
        // Api call
        const response = await fetch(`${host}/api/adminAccess/fetchallfeedbacks`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("Admintoken")
            }
        });
        const json = await response.json();
        setAdminFeedbackFetch(json)
        // console.log("Note State:", json);
    }


    //-------------------------------------------------------------------------------------
    //notes section

    //context related
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
        <NotesContext.Provider value={{ notes, addnote, deletenote, editnote, getnotes, dishCount, setDishCount, uniqueDishes, setuniqueDishes, dishesData, formData, setFormData, availableTimes, setAvailableTimes, addorder, getallordersofusers, AdminDineinOrdersFetch,addfeedback,getallfeedbacksofusers,AdminFeedbackFetch }}>
            {props.children}
        </NotesContext.Provider>
    )
}

export default NoteState;