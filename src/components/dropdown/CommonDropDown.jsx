import React from "react";
import images from "../../assets/identifier";


const   CommonDropDown = ({ options, selected, onChange, className = "" }) => {
  return (
    <div className={`custom-dropdown ${className}`}>
      <select value={selected} onChange={onChange} className="dropdown-select">
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <img  src={images.downArrow} alt="Down Arrow" className="dropdown-arrow" />
    </div>
  );
};

export default CommonDropDown;
