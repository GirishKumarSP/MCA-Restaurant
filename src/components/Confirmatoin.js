import React from 'react'
import img from "../Images/tick.png"

function Confirmatoin() {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-400'>
        <img src={img} alt="tick mark" className='w-2/12' />
        <div className='font-bold text-3xl m-4'>Thank You!</div>
        <div className='font-bold text-2xl'>congratulations your booking has been confirmed</div>
    </div>
  )
}

export default Confirmatoin