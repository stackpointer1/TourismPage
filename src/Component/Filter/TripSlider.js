import React from 'react';
function TripSlider({onChange, value}) {
  return(
    <div className="slider-container">
      <input
        type="range"
        min={0}
        max={11000}
        step={100}
        value={value}
        onChange={onChange}
      />
      <div> ₹ {value}</div>
    </div>
  )
}
export default TripSlider
