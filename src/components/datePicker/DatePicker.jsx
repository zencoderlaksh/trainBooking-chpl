import React from "react";
import images from "../../assets/identifier";

const DatePicker = ({ value, onChange, placeholder="Birthday DD/MM/YYYY",className }) => {
  return (
    <>
      <input
      type="date"
      value={value}
      onChange={onChange}
      className={`input-datepicker, ${className}`}
      placeholder={placeholder}
    />
    <div className="relative">
    <img
        src={images.dateIcon}
        alt="Calendar Icon"
        className=" calender-class absolute right-3 top-3 w-5 h-5 pointer-events-none"
      />
    </div>
    
    </>
  
  );
};

export default DatePicker;
