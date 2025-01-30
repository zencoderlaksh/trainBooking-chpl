import React from 'react'
import images from '../../../assets/identifier'

const FaqTwin = () => {
  return (
    <div className='faq'>
         <div className="faq-container">
             <div className="left-container-landing">
                <div className="left-img">
                     <img className='landing-img' src={images.monitor} alt="" srcset="" />
                </div>
                <div className="right-contentr">
                     <p className='content-txt'>It’s very easy to order
                        a train ticket online,
                        VLT E-ticket can not be lost 
                        or forgotten at home</p>
                </div>
             </div>
             <div className="right-container-landing">
                  <div className="left-img">
                     <img className='landing-img' src={images.internet} alt="" srcset="" />
                  </div>
                <div className="right-contentr">
                    <p className='content-txt'>To order ticket all you need is
                        Internet, a couple minutes
                        and a payment card.
                        Grab bonuses and discounts.</p>
                </div>
             </div>
         </div>
    </div>
  )
}

export default FaqTwin