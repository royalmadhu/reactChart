import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import rclogo from "../img/Rclogo.png"

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
    <header className={`shadow fixed z-20 w-full h-30 transition-colors duration-300 ${scrolled ? 'bg-sky-950' : 'bg-transparent'}`}>
      <div className="mx-auto py-2 px-4 sm:px-6 lg:px-16 flex justify-between">
      <div className="py-6">
        <Link to="/" className={`${scrolled ? 'text-white' : 'text-black font-bold'}`}>
            <img src={rclogo}/>
        </Link>
        </div>
      <div className="py-6">
          <Link to="/" className={`${scrolled ? 'text-white' : 'text-black font-bold'}`}>Home</Link>
      </div>
      <div className="py-6">
      <Link to="/dataSummary" className={`${scrolled ? 'text-white' : 'text-black font-bold'}`}>Data Summary</Link>
      </div> 
      <div className="py-6"> 
      <Link to="/results" className={`${scrolled ? 'text-white' : 'text-black font-bold'}`}>Results</Link>
      </div> 
      </div>
    </header>
  )
}

export default Header;
