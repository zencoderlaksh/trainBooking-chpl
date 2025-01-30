import React from 'react'
import CardComponent from '../../../components/card/CardComponent'
import images from '../../../assets/identifier'
import SearchBox from '../../../components/searchBox/SearchBox'

const TourPackages = () => {
  return (
    <div className='cards'>
        <div className="search-box">
            <SearchBox/>
        </div>
    <h1 className='text-white tour-title'>Popular Tour Packages</h1>
<div className="group-cards">
<CardComponent 
  image={images.vacayOne} 
  price="60" 
  title="Hà Nội" 
  locations="Sài Gòn - Hà Nội" 
  time="31 HOURS" 
/>
<CardComponent 
  image={images.vacayTwo} 
  price="60" 
  title="Dà Nẵng" 
  locations="Sài Gòn - Hà Nội" 
  time="31 HOURS" 
/>
<CardComponent 
  image={images.vacayThree} 
  price="60" 
  title="Vịnh Hạ Long" 
  locations="Sài Gòn - Hà Nội" 
  time="31 HOURS" 
/>
         </div>
         
    </div>
  )
}

export default TourPackages