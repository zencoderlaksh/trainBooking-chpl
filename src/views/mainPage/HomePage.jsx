import React from "react";
import Button from "../../components/button/Button";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="banner-text">
        <h2 className=" title-text-one text-white font-[40px]">Welcome to</h2>
        <h1 className="title-text-two text-white">
          <span className="text-[#FFD979] span-text">Van Lang</span> Tour
        </h1>
      </div>
      <div className="visit-btn">
        <Button className="home-btn" text="View Page" />
      </div>
    </div>
  );
};

export default HomePage;
