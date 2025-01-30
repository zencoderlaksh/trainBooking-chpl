import React from 'react';

const OurStory = ({ header, paragraph, imageSrc, altText, reverseLayout = false }) => {
  return (
    <div className={`our-story-container ${reverseLayout ? 'reverse' : ''}`}>
      {/* Left Section: Header and Paragraph */}
      <div className="our-story-left">
        <h2 className="our-story-header">{header}</h2>
        <p className="our-story-paragraph">{paragraph}</p>
      </div>

      {/* Right Section: Image */}
      <div className="our-story-right">
        <img src={imageSrc} alt={altText} className="our-story-image" />
      </div>
    </div>
  );
};

export default OurStory;
