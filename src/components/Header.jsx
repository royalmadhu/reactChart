import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import rclogo from "../img/Rclogo.png";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`shadow fixed z-20 w-full transition-colors duration-300 ${scrolled ? 'bg-sky-950' : 'bg-transparent'}`}>
      <div className="mx-auto py-2 px-4 sm:px-6 lg:px-16 flex justify-between items-center">
        <div className="py-6">
          <Link to="/" className={`${scrolled ? 'text-white' : 'text-black font-bold'}`}>
            <img src={rclogo} alt="Logo" />
          </Link>
        </div>
        <div className="hidden lg:flex">
          <Link to="/" className={`${scrolled ? 'text-white' : 'text-black font-bold'} ml-6`}>Home</Link>
          <Link to="/dataSummary" className={`${scrolled ? 'text-white' : 'text-black font-bold'} ml-6`}>Data Summary</Link>
          <Link to="/results" className={`${scrolled ? 'text-white' : 'text-black font-bold'} ml-6`}>Results</Link>
        </div>
        <div className="lg:hidden">
          <button className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
