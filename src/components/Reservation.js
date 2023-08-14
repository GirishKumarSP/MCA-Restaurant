import React, { useState } from 'react'

function Reservation(props) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [seating, setSeating] = useState('');
    const [occasion, setOccasion] = useState("birthday")
    const [formValid, setFormValid] = useState(false);

    const { availableTimes, dispatch } = props;

    const handleDateChange = (event) => {
        const selectedDate = `"${event.target.value}"`;
        const finalDate = new Date(selectedDate);
        setDate(event.target.value);
        dispatch({ type: 'UPDATE_TIMES', date: finalDate });
        validateForm();
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
        validateForm();
    }

    const handleSeatingChange = (event) => {
        setSeating(event.target.value);
        validateForm();
    }

    const handleOccasionChange = (event) => {
        setOccasion(event.target.value);
        validateForm();
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        props.submitForm(e);
        // Process the form data or make an API request
        console.log('Form submitted:', { date, time, seating, occasion });
        // Reset the form fields
        setDate('');
        setTime('');
        setSeating('');
        setOccasion('');
        setFormValid(false);
    };

    const validateForm = () => {
        if (date && time && seating && occasion) {
            setFormValid(true);
        } else {
            setFormValid(false);
        }
    };

    return (
        <div className=' flex h-screen justify-center items-center bg-gray-500'>
            <div className="bookingContainer flex mx-5 my-10 justify-center items-center w-5/6 h-5/6 border-2 border-black rounded-3xl">
                <div className="left w-1/2 h-3/6 flex flex-col justify-center items-center m-5">
                    <h1 className='text-3xl my-5 font-bold' >Welcome to our Booking Form!</h1>
                    <p className='bookingDescription text-base font-semibold text-center'>Embark on a remarkable journey of personalized service and remarkable experiences, as we redefine the art of booking and cater to your every desire.</p>
                </div>
                <div className="right h-5/6 flex w-1/2 justify-center m-5  rounded-lg border-gray-400 border-2">
                    <form className="booking-form w-full p-6 " onSubmit={handleSumbit}>

                        <label className='block my-2 font-bold' htmlFor="res-date">Choose date</label>
                        <input className='w-full p-2 border-gray-400 border-2 rounded-lg bg-gray-400' type="date" id="res-date" value={date} onChange={handleDateChange} required />

                        <label className='block my-2 font-bold' htmlFor="res-time">Choose time</label>
                        <select className='w-full p-2 border-gray-400 border-2 rounded-lg bg-gray-400' type="time" id="res-time" value={time} onChange={handleTimeChange} required>
                            <option value="">Select a time</option>
                            {availableTimes && availableTimes.map((timeOption) => (
                                <option key={timeOption}>{timeOption}</option>
                            ))}
                        </select>

                        <label className='block my-2 font-bold' htmlFor="guests">Number of guests</label>
                        <input className='w-full p-2 border-gray-400 border-2 rounded-lg bg-gray-400' type="number" placeholder="0" min="1" max="10" id="guests" value={seating} onChange={handleSeatingChange} required />

                        <label className='block my-2 font-bold' htmlFor="occasion">Occasion</label>
                        <select className='w-full p-2 border-gray-400 border-2 rounded-lg bg-gray-400' type="select" id="occasion" value={occasion} onChange={handleOccasionChange} required>
                            <option value="">Select an occasion</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>

                        <input className='block my-4 p-3 bg-blue-500 rounded-lg' type="submit" value="Make Your reservation" disabled={!formValid} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Reservation