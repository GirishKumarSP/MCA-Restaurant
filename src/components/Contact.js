import React from 'react'
import { useNavigate } from "react-router-dom";


function Contact() {
    const navigate = useNavigate();

    const onclick = (e)=>{
        e.preventDefault()
        navigate('/confirmation', { state: { message: "You'll Hear from Us Shortly" } });
    }

    return (
        <div className='bg-gray-500'>
            <h1 className="flex justify-center pt-8 text-4xl font-bold">Contact Us</h1>
            <div className='items-center justify-center h-screen md:flex '>
                <div className="flex justify-center mx-2 border-black md:items-center h-5/6 md:border-2 rounded-2xl md:px-10 md:mx-20 ">
                    <div className="flex-col flex-1 hidden left md:flex">
                        <h1 className='mx-5 my-5 text-3xl font-bold'>Welcome to our Contact Form!</h1>
                        <p className="bookingDescription">Embark on a remarkable journey of personalized service and remarkable experiences, as we redefine the art of booking and cater to your every desire.</p>
                    </div>
                    <div className="flex flex-col flex-1 right">
                        <form className="p-8 space-y-4 border-2 border-black rounded-lg ">
                            <div className=''>
                                <label htmlFor="name" className="block mb-1 font-semibold">Name</label>
                                <input type="text" id="name" className="w-full p-2 bg-gray-400 border rounded" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
                                <input type="email" id="email" className="w-full p-2 bg-gray-400 border rounded" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-1 font-semibold">Message</label>
                                <textarea id="message" className="resize-none w-full min-h-[100px] rows-4 border bg-gray-400 rounded p-2"></textarea>
                            </div>
                            <button onClick={onclick} type="submit" className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact