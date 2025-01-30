import React from 'react'
import Button from "../../components/button/Button"
import images from "../../assets/identifier"
import OurStory from '../../components/ourStory/OurStory';

const AboutPage = () => {
  return (
    <div className='about-us-wrapper'>
         <div className="banner-wrapper-center text-white text-lg">
           <div className="banner-text">
           <h1 className='title-text-two text-white'><span className='text-[#FFD979] span-text'>Van Lang</span> Tour</h1>
           <h2 className='title-text-aboutus'>Your Gateway to Memorable Train Journeys</h2>
        
        </div>
        <div className="visit-btn click-btn">
           <Button className="read-more" text="Click Here"/>

        </div>
         </div>
         <div className="our-story-section">
          <div className="first-part">
             <OurStory
                header="Our Story"
                paragraph="At Van Lang Tour, we believe that every journey holds the promise of adventure, discovery, and unforgettable memories. Established with a passion for travel and a commitment to seamless experiences, we are your trusted partner in exploring the world through train travel."
                imageSrc={images.storyPage2} 
                altText="Story Image"
                 reverseLayout={true}
              />
          </div>
            <div className="second-part">
                <OurStory
                header="Who We Are"
                paragraph="Van Lang Tour is a dedicated online platform designed to revolutionize the way you embark on train journeys. Whether you're a first-time traveler, a seasoned explorer, or planning a memorable trip with family and friends, we're here to make your travel dreams a reality."
                imageSrc={images.storyPage} 
                altText="Story Image"
              />
            </div>
            <div className="third-part">
              <h2 className='mission our-story-header'>Our Mission</h2>
              <p className='mission-text our-story-paragraph'>
                Our mission is simple: to provide you with a hassle-free and enjoyable travel experience. We understand that the journey itself is an integral part of your adventure, and that's why we're committed to offering a wide selection of train routes, impeccable service, and competitive prices.
              </p>
            </div>
         </div>


    </div>
  )
}

export default AboutPage