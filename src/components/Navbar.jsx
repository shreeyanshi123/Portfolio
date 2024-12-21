import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { NAVIGATION_LINKS } from '../constants';
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    // Toggle the mobile menu
    const toggleMobileMenu = () => {
        setIsMobileOpen(!isMobileOpen);
    };

    const handleLinkClick = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling
                block: 'start',     // Align to the top of the section
            });
        }
        setIsMobileOpen(false); // Close the mobile menu if open
    };

    return (
        <div>
            <nav className='fixed left-0 right-0 top-4 z-50'>
                {/* Desktop Navbar */}
                <div className='mx-auto hidden max-w-2xl items-center justify-center gap-10 rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex'>
                    <div className='flex items-center justify-between gap-6'>
                        <div>
                            <a href="#">
                                <img src={logo} width={150} alt='logo' />
                            </a>
                        </div>
                    </div>

                    <div>
                        <ul className='flex items-center gap-4'>
                            {NAVIGATION_LINKS.map((item, index) => (
                                <li key={index}>
                                    <button
                                        className='text-sm hover:text-yellow-400'
                                        onClick={() => handleLinkClick(item.href.replace('#', ''))} // Extract the ID from href
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Mobile Navbar */}
                <div className='rounded-lg backdrop-blur-md lg:hidden'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <a href="#">
                                <img src={logo} width={90} alt='logo' />
                            </a>
                        </div>

                        <div className='flex items-center'>
                            <button className='focus:outline-none lg:hidden' onClick={toggleMobileMenu}>
                                {isMobileOpen ? (
                                    <FaTimes className="m-2 h-6 w-5" />
                                ) : (
                                    <FaBars className='m-2 h-6 w-5' />
                                )}
                            </button>
                        </div>
                    </div>

                    {isMobileOpen && (
                        <ul className='ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md'>
                            {NAVIGATION_LINKS.map((item, index) => (
                                <li key={index}>
                                    <button
                                        className='mobile-menu-item block w-full text-lg hover:text-yellow-400'
                                        onClick={() => handleLinkClick(item.href.replace('#', ''))}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
