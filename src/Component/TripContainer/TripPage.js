import React, { useEffect, useState } from 'react'
import TypeFilter from '../Filter/TypeFilter';
import { TRIP_JSON } from './Trip.json.js';
import './trip.css'
import TripCard from './TripCard';

function TripPage() {
  console.log("json", TRIP_JSON)
  const [json, setJson] = useState(TRIP_JSON || []);
  const [filterType, setFilterType] = useState([]);

  useEffect(() => {
    setJson(TRIP_JSON)
    if (filterType.length > 0) {
      const updatedJson = TRIP_JSON.filter(item => filterType.includes(item?.type?.id));
      setJson(updatedJson);
    }

  }, [filterType]);

  const handleCheckboxChange = ( event ) => {
    const value = parseInt(event.target.value);
    if (filterType.includes(value)) {
      setFilterType(filterType.filter(item => item !== value));
    } else {
      setFilterType([...filterType, value]);
    }
  };

  return (
    <div className='main-container'>
      <div className='container-left'>
        <div className='title'><strong>Category-type</strong></div>
        <TypeFilter onChange={handleCheckboxChange}/>
      </div>
      <TripCard tripJson={json}/>
    </div>
  )
}

export default TripPage
