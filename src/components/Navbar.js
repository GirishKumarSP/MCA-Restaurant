import React, { useState } from 'react';
import hamburger from "../Images/hamburger.png";
import cross from "../Images/cross.png";
import backgroundImage from '../Images/background.jpg';
import { Link } from "react-router-dom";

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`relative z-10 bg-cover bg-top`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className={`flex items-center justify-between bg-gray-900 bg-opacity-50 p-4`}>
                <div className="px-2 mx-3 font-bold text-white border-4 border-white border-double">DineOptima</div>
                <div className="hidden space-x-4 md:flex">
                    <Link to="/" className="font-bold text-gray-400 hover:text-white">Home</Link>
                    <Link to="/about" className="font-bold text-gray-400 hover:text-white">About</Link>
                    <Link to="/contact" className="font-bold text-gray-400 hover:text-white">Contact</Link>
                    <a href="/" className="font-bold text-blue-500 underline hover:text-white ">Login</a>
                    <a href="/" className="font-bold text-blue-500 underline hover:text-white">Signin</a>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? (
                            <img src={cross} alt="cross" className="w-8 h-8 " />
                        ) : (
                            <img src={hamburger} alt="hamburger" className="w-8 h-8 " />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed bottom-0 left-0 right-0 z-20 p-4 bg-gray-700 md:hidden top-16 opacity-95">
                    <div className="flex flex-col text-center space-y-7">
                        <hr className='mt-5 border-2 border-black' />
                        <Link to="/" className='p-4 text-xl font-bold text-gray-400 border-2 border-black'>Home</Link>
                        <Link to="/about" className='p-4 text-xl font-bold text-gray-400 border-2 border-black'>About</Link>
                        <a href="/" className='p-4 text-xl font-bold text-gray-400 border-2 border-black'>Services</a>
                        <Link to="/contact" className='p-4 text-xl font-bold text-gray-400 border-2 border-black'>Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;