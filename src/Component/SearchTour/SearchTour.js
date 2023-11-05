import React from 'react'
import './SearchRour.css'
import Location from '../../asset/images/location.svg'

const SearchTour = () => {
  return (
    <div className='search-wrapper'>
      <div className='searching-country'>
        <div className='search-location'>
          <img
            className='location-img'
            src={Location}
            alt='location'
          />
          <span className='location-heading'>Location</span>
          <div className='loca-text' >Where are you going?</div>
        </div>
        <div className='spacer-line'></div>
        <div className='checkin-out'>
          <div className='check-in'>Check in</div>
          <div className='check-out'>Check out</div>
        </div>
        <div className='tour-type'>
          <div>Tour-type</div>
        </div>
        <div className='spacer-line'></div>
        <div>
          <button className='search-tour'>Search</button>
        </div>

      </div>
    </div>
  )
}
export default SearchTour
