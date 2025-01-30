import React from 'react'
import SearchBox from '../../components/searchBox/SearchBox'
import TrainInfo from './components/TrainInfo'

const BookingPage = () => {
  return (
    <div className='booking-container'>
      <div className="search-boxes">
        <SearchBox/>
      </div>
      <div className="train-info">
        <TrainInfo/>
         <TrainInfo/>
          <TrainInfo/>
      </div>
    </div>
  )
}

export default BookingPage