import React, { useContext, useEffect, useState } from 'react'
import DishCard from './DishCard';
import FoodBasket from './FoodBasket';
import NotesContext from '../context/notes/NotesContext';
import { Link } from "react-router-dom";


function DishList() {
    const context = useContext(NotesContext);
    const { dishCount, setuniqueDishes, uniqueDishes } = context;
    const [formValid, setFormValid] = useState(false);
    
    useEffect(() => {
        setuniqueDishes(dishCount.length)
        if (dishCount.length>=1) {
            setFormValid(true);
        } else {
            setFormValid(false);
        }
    }, [dishCount.length, setuniqueDishes]) 


    return (
        <div className='min-h-screen bg-gray-400 flex flex-col justify-center items-center pb-20'>
            <h1 className='text-4xl font-bold m-4 underline'>Menu</h1>
            <div className='w-11/12 '>
                <DishCard />
            </div>
            <FoodBasket uniqueDishes={uniqueDishes} />

            <div className='flex justify-between w-10/12'>
                <Link to="/reservation" className="font-bold text-white bg-blue-500 p-3 rounded-2xl">Back</Link>

                {formValid ? (
                    <Link to="/checkout" className="font-bold text-white bg-blue-500 p-3 rounded-2xl">check Out</Link>
                ) : (
                    <span className="font-bold text-white bg-gray-300 p-3 rounded-2xl cursor-pointer">check Out</span>
                )}



            </div>
        </div>
    )
}

export default DishList