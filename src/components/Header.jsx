import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-600 w-full p-8">
      <nav className="menu">
        <ul className="flex">
          <li className="mx-4">
            <Link to="/" className="text-white">Home</Link>
          </li>
          <li className="mx-4">
            <Link to="/dataSummary" className="text-white">Data Summary</Link>
          </li>
          <li className="mx-4">
            <Link to="/results" className="text-white">Results</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
