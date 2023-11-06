import React from 'react'

function TripCard( { tripJson } ) {
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
                    <div className={'trip-top'}>
                      <div className={'trip-type'}>{trip.type?.name}</div>
                      <div className='duration'>{trip.duration.value}</div>
                    </div>

                    <span className="product-title"><strong>{trip.name}</strong></span>
                    <div className='description'>{trip.description}</div>
                  </div>
                  <div className={'trip-right'}>
                    <div className={'trip-rating'}>Rating : {trip.rating}★</div>
                    <div className={'trip-review'}>{trip.review}</div>
                    <button
                      type='button'
                      className={'premium'}>{trip.premium?.name}
                    </button>
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
