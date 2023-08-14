import React, { useEffect, useState } from 'react'
import DishCard from './DishCard';
import FoodBasket from './FoodBasket';

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


function DishList() {
    const [dishCount, setDishCount] = useState([])
    const [uniqueDishes, setuniqueDishes] = useState(null)

    useEffect(() => {
        setuniqueDishes(dishCount.length)
    }, [dishCount])

    return (
        <div className='min-h-screen bg-gray-400 flex flex-col justify-center items-center pb-20'>
            <h1 className='text-4xl font-bold m-4 underline'>Menu</h1>
            <div className='w-11/12 '>
                <DishCard dishesData={dishesData} dishCount={dishCount} setDishCount={setDishCount} setuniqueDishes={setuniqueDishes}/>
            </div>
            <FoodBasket uniqueDishes={uniqueDishes} />
        </div>
    )
}

export default DishList