'use client'
import React, { useState, useEffect } from "react";
import '../globals.css'
import Image from "next/image";

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    // Use useEffect to ensure window is only accessed on the client side
    useEffect(() => {
        // Check window width here and update isMenuOpen as needed
        const handleResize = () => {
            setIsMenuOpen(window.innerWidth >= 768); // Adjust the breakpoint as needed
        };

        // Initial check
        handleResize();

        // Listen for window resize events
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-full">
            <div className="flex   sm:justify-start  flex-wrap  items-center justify-evenly">

                <a className="block sm:mr-44 sm:py-0 text-center no-underline sm:text-4xl font-black text-5xl py-7 w-5" href="/">Job<span className="text-my-green">Now</span></a>
                <button
                    type="button"
                    className="inline-flex ml-32 items-center p-2 w-10 h-10 justify-center text-sm text-my-green rounded-lg md:hidden hover:text-white"
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen ? "true" : "false"}
                    onClick={toggleMenu}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`w-full md:w-auto  ${isMenuOpen ? "block" : "hidden"}`} id="navbar-default">
                    <div className="nav w-full sm:static absolute flex space-between flex-col md:flex-row  md:mt-0 md:border-0">
                <a className={`sm:mr-12 sm:bg-transparent bg-f2f2f2 text-center sm:px-0 sm:py-0 px-5 py-3.5 no-underline font-bold text-xl hover:bg-my-green hover:text-white ${isMenuOpen ? "block" : "hidden"}`} href="/">Home</a>
                <a className={`sm:mr-12 text-center sm:bg-transparent bg-f2f2f2 sm:px-0 sm:py-0 px-5 py-3.5 no-underline font-bold text-xl hover:bg-my-green hover:text-white ${isMenuOpen ? "block" : "hidden"}`} href="/">Job</a>
                <a className={`sm:mr-12 text-center sm:bg-transparent bg-f2f2f2 sm:px-0 sm:py-0 px-5 py-3.5 no-underline font-bold text-xl hover:bg-my-green hover:text-white ${isMenuOpen ? "block" : "hidden"}`} href="/">About Us</a>
                <a className={` text-center no-underline sm:bg-transparent bg-f2f2f2 sm:px-0 sm:py-0 px-5 py-3.5 font-bold text-xl hover:bg-my-green hover:text-white ${isMenuOpen ? "block" : "hidden"}`} href="/">Contact</a>
                <a className={`sm:hidden text-center sm:bg-transparent bg-f2f2f2 no-underline sm:px-0 sm:py-0 px-5 py-3.5 font-bold text-xl hover:bg-my-green hover:text-white ${isMenuOpen ? "block" : "hidden"}`} href="/">Sign In</a>
                <a className={`sm:hidden text-center sm:bg-transparent bg-f2f2f2 no-underline sm:px-0 sm:py-0 px-5 py-3.5 font-bold text-xl hover:bg-my-green hover:text-white ${isMenuOpen ? "block" : "hidden"}`} href="/">Create Account</a>
                </div></div>
            </div>
        </nav>
    )
}