'use client';
import { useState } from 'react';
import { FaNetworkWired, FaShieldAlt, FaDesktop } from "react-icons/fa";

const CircularPricingTool = () => {
  const [selectedSections, setSelectedSections] = useState({
    section1: false,
    section2: false,
    section3: false,
  });

  const toggleSelection = (section) => {
    setSelectedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <ul className="pie">
      <li
        className={`slice ${selectedSections.section1 ? 'selected' : ''}`}
        onClick={() => toggleSelection('section1')}
      >
        <div className="slice-contents">
          <div className="center-content">
            <FaNetworkWired size={40} />
            <p>Secure Branch</p>
          </div>
        </div>
      </li>
      <li
        className={`slice ${selectedSections.section2 ? 'selected' : ''}`}
        onClick={() => toggleSelection('section2')}
      >
        <div className="slice-contents">
          <div className="center-content">
            <FaShieldAlt size={40} />
            <p>Secure Applications</p>
          </div>
        </div>
      </li>
      <li
        className={`slice ${selectedSections.section3 ? 'selected' : ''}`}
        onClick={() => toggleSelection('section3')}
      >
        <div className="slice-contents">
          <div className="center-content">
            <FaDesktop size={40} />
            <p>Secure Workstations</p>
          </div>
        </div>
      </li>
      <li className="inner-pie"></li>
    </ul>
  );
};

export default CircularPricingTool;
