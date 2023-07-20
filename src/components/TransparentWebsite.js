import React from 'react';
import backgroundImage from '../Images/background.jpg';
import Navbar from './Navbar';

const TransparentWebsite = () => {
    return (
        <>
            <div
                className="flex flex-col h-screen bg-center bg-cover"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <Navbar />
                <div className='flex items-center justify-center flex-grow'>
                    <div className="p-8 text-center bg-gray-600 bg-opacity-50 rounded-lg ">
                        <h1 className="mb-4 text-4xl font-bold">Welcome to My Transparent Website</h1>
                        <p className="text-lg">This is an example of a transparent website with one image as its background.</p>
                        Add more content here
                    </div>
                </div>
            </div>
        </>
    );
};

export default TransparentWebsite;
