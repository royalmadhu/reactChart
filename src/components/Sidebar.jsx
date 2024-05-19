import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  // State to keep track of the selected item
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to handle click on an item
  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className="sidebar">
      <h2 className="text-2xl mt-16 ml-8 font-medium">Menu</h2>
      <ul className="ml-8 mt-4">
        <li
          className={`mb-2 font-normal ${selectedItem === 0 ? 'bg-blue-500' : ''}`}
          onClick={() => handleItemClick(0)}
        >
          <Link to="/">Dashboard</Link>
        </li>
        <li
          className={`mt-2 ${selectedItem === 1 ? 'bg-blue-500' : ''}`}
          onClick={() => handleItemClick(1)}
        >
          <Link to="/results">Data Summary</Link>
        </li>
        <li
          className={`mt-2 ${selectedItem === 2 ? 'bg-blue-500' : ''}`}
          onClick={() => handleItemClick(2)}
        >
          <Link to="/dataSummary">Results</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
