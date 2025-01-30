import React from 'react';

const CardComponent = ({ image, price, title, locations, time }) => {
  return (
    <div className="card-container">
      {/* Badge (Price) */}
      <div className="price-badge">{`$${price}`}</div>

      {/* Card Image with Title */}
      <div className="card-image">
        <img src={image} alt="Card Image" className="card-background-image" />
        <h2 className="card-title">{title}</h2>
      </div>

      {/* Locations */}
      <div className="card-locations">{locations}</div>

      {/* Time */}
      <div className="card-time">{time}</div>
    </div>
  );
};

export default CardComponent;
