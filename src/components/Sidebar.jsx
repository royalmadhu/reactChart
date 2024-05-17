import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="text-2xl mt-16 ml-8 font-medium">Menu</h2>
      <ul className="ml-8 mt-4">
        <li className="mb-2 font-normal">
          <Link to="/">Dashboard</Link> 
        </li>
        <li className="mt-2">
          <Link to="/results">Results</Link>
        </li>
        <li className="mt-2">
          <Link to="/dataSummary">Data Summary</Link> 
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
