import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import DineOptimaContext from '../context/Dineoptima/DineOptimaContext';
import { useNavigate } from 'react-router-dom';


function AdminDineinOrders() {
    const context = useContext(DineOptimaContext);
    const { getallordersofusers, AdminDineinOrdersFetch } = context
    const navigate = useNavigate();

    //to filter the order
    const [selectedDate, setSelectedDate] = useState(null);
    const [filteredOrders, setFilteredOrders] = useState([]);

    // Calculate the total of all orders
    let total = 0;
    AdminDineinOrdersFetch.map((dineInDetails) => {
        const orderTotal = parseFloat(dineInDetails.orderDetails.total);
        total += orderTotal;
        return null
    });

    useEffect(() => {
        if (localStorage.getItem("Admintoken")) {
            getallordersofusers()
            navigate("/orders")
        } else {
            navigate("/adminlogin")
        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        // Filter orders based on selected date
        if (selectedDate) {
            const filtered = AdminDineinOrdersFetch.filter(
                (order) => order.orderDetails.date === selectedDate
            );
            setFilteredOrders(filtered);
        } else {
            setFilteredOrders(AdminDineinOrdersFetch);
        }
    }, [selectedDate, AdminDineinOrdersFetch]);

    return (
        <div>
            <div className='bg-gray-500  min-h-screen flex flex-col justify-center items-center'>
                <div className='text-2xl font-bold underline m-5'>ORDERS</div>

                {/* Add date filter */}
                <div className="flex justify-center items-center m-5">
                    <label className="font-semibold">Filter by Date:</label>
                    <input
                        type="date"
                        className="border bg-gray-400 border-black ml-2 p-1"
                        onChange={(e) => setSelectedDate(e.target.value)}
                    />
                </div>

                <div className='w-5/6 border-2 border-black m-5'>
                    <div className='flex justify-between m-2'>
                        <div className='w-3/12 flex justify-center font-semibold border-r-2 border-black'>Date</div>
                        <div className='w-3/12 flex justify-center font-semibold border-r-2 border-black'>Time</div>
                        <div className='w-3/12 flex justify-center font-semibold border-r-2 border-black'>Seating</div>
                        <div className='w-3/12 flex justify-center font-semibold border-r-2 border-black'>Occasion</div>
                        <div className='w-3/12 flex justify-center font-semibold border-r-2 border-black'>Dishes</div>
                        <div className='w-3/12 flex justify-center font-semibold '>Total</div>
                    </div>
                    <hr className="border-t-2 border-black my-4" />
                    {
                        filteredOrders.map((dineInDetails, index) => {
                            return (
                                <div key={index}>
                                    <div className='flex my-5 mx-1 '>
                                        <div className='w-3/12 flex justify-center'>{dineInDetails.orderDetails.date}</div>
                                        <div className='w-3/12 flex justify-center'>{dineInDetails.orderDetails.time}</div>
                                        <div className='w-3/12 flex justify-center'>{dineInDetails.orderDetails.seating}</div>
                                        <div className='w-3/12 flex justify-center'>{dineInDetails.orderDetails.occasion}</div>
                                        <div className='w-3/12 flex flex-col justify-center items-center'>
                                            {dineInDetails.foodList.map((dish, index) => (
                                                <span key={index}>{dish.dishname},</span>
                                            ))}
                                        </div>
                                        <div className='w-3/12 flex justify-center'>${dineInDetails.orderDetails.total}</div>
                                    </div>
                                    <hr className="border-t-2 border-black" />
                                </div>
                            )
                        })
                    }
                    {/* Display the subtotal */}
                    <div className='flex justify-between items-center m-2 text-lg font-semibold'>
                        <div className='w-1/6 flex justify-center'>Total:</div>
                        <div className="w-1/6 flex justify-center font-bold">${total.toFixed(2)}</div>
                    </div>

                </div>
                <div className='flex justify-between w-10/12 mb-5'>
                    <Link to="/dishlist" className="font-bold text-white bg-blue-500 p-3 rounded-2xl">Back</Link>
                    <Link to="/reservation" className="font-bold text-white bg-blue-500 p-3 rounded-2xl" >Place Order</Link>
                </div>
            </div>
        </div>
    )
}

export default AdminDineinOrders