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
        // setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-full">
            <div className="flex sm:justify-between items-center justify-evenly">

                <a className="block sm:py-0 text-center no-underline sm:text-3xl font-black text-5xl py-7" href="/">Job<span className="text-teal-400">Now</span></a>
                <button
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen ? "true" : "false"}
                    onClick={toggleMenu}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <a className={` text-center no-underline font-bold ${isMenuOpen ? "block" : "hidden"}`} href="/">Home</a>
                <a className={` text-center no-underline font-bold ${isMenuOpen ? "block" : "hidden"}`} href="/">Job</a>
                <a className={` text-center no-underline font-bold ${isMenuOpen ? "block" : "hidden"}`} href="/">About Us</a>
                <a className={` text-center no-underline font-bold ${isMenuOpen ? "block" : "hidden"}`} href="/">Contact</a>

            </div>
        </nav>
    )
}