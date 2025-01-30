import React, { useState } from "react";
import images from "../../assets/identifier";
import "react-datepicker/dist/react-datepicker.css";
import CommonDropDown from "../../components/dropdown/CommonDropDown";
import InputField from "../../components/inputField/InputField";
import DatePicker from "../../components/datePicker/DatePicker";
import Button from "../../components/button/Button";

const SignupPage = () => {
  const [bgColor, setBgColor] = useState("#CFB165");
  const [startDate, setStartDate] = useState(new Date());
  const [selected, setSelected] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleFocus = () => setBgColor("#CFB165");
  const handleBlur = () => setBgColor("#CFB165");

  return (
    <div className="register-bg flex items-center justify-center text-white">
      <div className="signup-container w-full max-w-[50%] bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        <div className="signup-wrapper">
          <div className="milestones-container pt-12">
            <img
              className="milestone-img w-full h-[68px]"
              src={images.numberSlide}
              alt="Milestone"
            />
          </div>
          <div className="input-body">
            <div className="title-header text-left z-10 p-16">
              <h1 className=" signup-title-text text-2xl font-bold text-black mb-2">
                Ready to join Van Lang Tour? Let’s get started
              </h1>
              <p className=" para-common text-black">
                We need a few details about you to create your account profile
              </p>
            </div>
            <div className="inputcontainer">
              <div className="row">
                <div className="col-lg-3">
                  <div className="language-wrapper">
                    <label
                      className=" common-label text-black"
                      htmlFor="language"
                    >
                      Preferred Language *
                    </label>
                    <CommonDropDown
                      options={["English", "Hindi", "Gujarati"]}
                      selected={selected}
                      onChange={(e) => setSelected(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="wrapper">
                <div className="wrapper-text flex items-start justify-baseline">
                  <div className="name  common-label text-black">Name*</div>
                  <div className="text para-common-two text-black">
                    In order to earn and redeem points, your name must match the
                    name on your government
                    <br />
                    issued ID photo used when travelling.
                  </div>
                </div>
                <div className=" grid grid-cols-6 gap-4">
                  <div className="row row-mobile">
                    <div className="col-lg-6 col-sm-12">
                      <div className="input-four col-span-6">
                        <InputField
                          placeholder="Last name (exmaple : NGUYEN)"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-four">
                        <InputField
                          placeholder="Middle name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="second-row row">
                    <div className="col-lg-6">
                      <InputField
                        placeholder="First name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-6 gender">
                      <CommonDropDown
                        options={["Select Gender", "Male", "Female"]}
                        selected={selected}
                        onChange={(e) => setSelected(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-11">
                      <div className="dob-wrapper ">
                        <div>
                          <label
                            className="text-black common-label date-label"
                            htmlFor="dob"
                          >
                            Date of Birth
                          </label>
                        </div>
                        <div>
                          <div>
                            <DatePicker
                              placeholder="Birthday DD/MM/YYYY"
                              value={date}
                              onChange={(e) => setDate(e.target.value)}
                              className="input-datepicker"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="submit-btn flex justify-end align-middle">
              <Button className="signup-btn" text="Next"></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
