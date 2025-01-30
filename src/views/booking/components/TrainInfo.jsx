import React from 'react'
import images from '../../../assets/identifier'


const TrainInfo = () => {
  return (
    <div className='train-info-container'>
         <div className="container-traininfo">
            <div className="left-container-info">
                 <div className="combined-sub">
              <div className="sub-train-info">
                    <div className="sub-left">
                        <div className="train-time">12 :00</div>
                        <div className="train-station">Sai Gon</div>
                    </div>
                    <div className="sub-middle">
                         <div className="train-icon">
                            <img className='trainn' src={images.trainIcon} alt="" srcset="" />
                         </div>
                    </div>
                    <div className="sub-right">
                         <div className="train-time">12 :00</div>
                        <div className="train-station">Sai Gon</div>
                    </div>
                </div>
                <div className="detailed-info">
                    <div className="info-start">
                        <div className="info-start-txt">first class - 24hrs00mins travel</div>
                        <div className="info-start-details">Details</div>
                    </div>
                    <div className="info-end">
                        <div className="price"><span className='money-txt'>1,000,000</span> VND</div>
                    </div>
                </div>  
            </div>
                
            </div>
            <div className="right-container-info">
                <div><img  className="righticon" src={images.rightArrow} alt="" srcset="" /></div>
            </div>
         </div>
    </div>
  )
}

export default TrainInfo