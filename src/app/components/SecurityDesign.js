'use client';
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Import the icon

const DividedCircleComponent = () => {
  // State to manage which sections are selected
  const [selectedSections, setSelectedSections] = useState([false, false, false]);

  // Function to toggle section selection
  const toggleSection = (index) => {
    const updatedSections = [...selectedSections];
    updatedSections[index] = !updatedSections[index];
    setSelectedSections(updatedSections);
  };

  return (
    <div className="circle-outer">
      <ul className="circle">
        {["first", "second", "third"].map((position, index) => (
          <li key={index} onClick={() => toggleSection(index)} className="cursor-pointer">
            <a href="#">
              <div className={`content ${position}`}>
                <div className="icon">
                  <FaSearch />
                </div>
                <p>Text</p>
              </div>
              <div
                className={`background ${selectedSections[index] ? "selected" : ""}`}
              ></div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DividedCircleComponent;
