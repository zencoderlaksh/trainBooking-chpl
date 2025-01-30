import React from 'react'
import FaqTwin from './components/FaqTwin';
import TourPackages from './components/TourPackages';
import Button from "../../components/button/Button"

const LandingPage = () => {
  return (
    <div className='landingPage'>
         <div className="banner-container">
            <div className="landing-title">Relax with</div>
            <div className="landing-subs">Van Lang Tour</div>
            <div className="read-more-btn">
               <Button className="read-more" text="Read More !"/>
            </div>
         </div>
         <div className="faq-container">
            <FaqTwin/>
         </div>
         <div className="tour-packages">
            <TourPackages/>
         </div>
    </div>
  )
}

export default LandingPage