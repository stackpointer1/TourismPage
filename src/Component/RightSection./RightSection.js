import React from 'react'
function RightSection ({trip}) {
  return (
    <div className='card-right'>
      <div className="items-section" aria-label='Plan name'>
        <span className="product-title">{trip.planName}</span>
      </div>
      <div className='premium'>{trip.premium}</div>
    </div>
  )
}

export default RightSection
