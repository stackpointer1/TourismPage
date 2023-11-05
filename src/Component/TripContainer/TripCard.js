import React from 'react'

function TripCard({tripJson}) {
  return (
    <div className="container-right">
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
                <div className={'trip-type'}>{trip.type?.name}</div>
                <span className="product-title">{trip.name}</span>
                <div className='description'>{trip.description}</div>
                <div className='duration'>{trip.duration}</div>
                <div className='premium'>{trip.premium}</div>
              </div>
              <div className={'trip-right'}>
                <div className={'trip-rating'}>{trip.rating}</div>
              </div>
            </div>
          )
        })
      }
    </div>

  )
}

export default TripCard
