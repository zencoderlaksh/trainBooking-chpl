import React, { useState } from "react";
import { Form} from "react-bootstrap";
import InputField from "../inputField/InputField"
import CommonDropDown from "../dropdown/CommonDropDown";
import DatePicker from "../datePicker/DatePicker"
import Button from "../button/Button"

const SearchBox = () => {
  const[name,setName] = useState("");
  const[selected,setSelected] = useState("");
  const[date,setDate] = useState("");


  return (
    <div className="search-input-box d-flex flex-row   align-items-center">
      {/* Search Input with Icon */}
      <div className="input-container">
        <Form.Group controlId="searchInput">
          <div className="title-keywords">
            <label className="labell-txt" htmlFor="keyword">Keyword</label>
          </div>
           
          <div className="input-with-icon">
            <i className="bi bi-search"></i>
              <InputField
                    placeholder="Search"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="search-box"
                      />
          </div>
        </Form.Group>
      </div>

      {/* Dropdown */}
      
      <div className="input-container">
        <Form.Group controlId="dropdown">
          <div className="title-keywords">
          <label className="labell-txt" htmlFor="activity">Activity</label>
          </div>  
          <CommonDropDown
                    options={["Any", "Pend", "Comp"]}
                    selected={selected}
                    onChange={(e) => setSelected(e.target.value)}
                    className="search-drop"
                    
                     />
        </Form.Group>
      </div>

      {/* Dropdown with Default Name */}
      <div className="input-container">
        <Form.Group controlId="defaultDropdown">
             <div className="title-keywords">
          <label className="labell-txt" htmlFor="activity">Destination</label>
          </div>
            <CommonDropDown
                    options={["Any", "Pend", "Comp"]}
                    selected={selected}
                    onChange={(e) => setSelected(e.target.value)}
                    className="search-drop"
                    
                     />
        </Form.Group>
      </div>

      {/* Date Picker */}
      <div className="input-container">
        <Form.Group controlId="datePicker">
          <div className="title-keywords">
          <label className="labell-txt" htmlFor="activity">Date</label>
          </div>
          <DatePicker className="search-date" placeholder='Birthday DD/MM/YYYY' value={date} onChange={(e) => setDate(e.target.value)} />
        </Form.Group>
      </div>

      {/* Search Button */}
      <div className="input-container search-button-container">
        <label className="date" htmlFor="activity"></label>
       <Button className="search-btn" text="Search"></Button>
      </div>
    </div>
  );
};

export default SearchBox;
