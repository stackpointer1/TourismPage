import React from 'react'

function TripCard({tripJson}) {
  return (

    <div className="container-right">
      <div className='card-wrapper'>
        {
          tripJson.map(trip => {
            return (
              <div
                key={trip.id}
                className="card-container"
              >
                <div className='card-logo'>
                  <img
                    src={trip.image}
                    alt={`${trip.name} Logo`}
                    className='trip-image'
                  />
                </div>
                <div className={'trip-left'}>
                  <div className='trip-details'>
                    <div className={'trip-type'}>{trip.type?.name}</div>
                    <span className="product-title">{trip.name}</span>
                    <div className='description'>{trip.description}</div>
                    <div className='duration'>{trip.duration.value}</div>
                  </div>
                  <div className={'trip-right'}>
                    <div className={'trip-rating'}>{trip.rating}</div>
                    <div className={'trip-review'}>{trip.review}</div>
                    <div className='premium'>{trip.premium?.name}</div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>

  )
}

export default TripCard
