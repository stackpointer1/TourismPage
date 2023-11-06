import React, { useEffect, useState } from 'react'
import DurationFilter from '../Filter/DurationFilter';
import TripSlider from '../Filter/TripSlider';
import TypeFilter from '../Filter/TypeFilter';
import Footer from '../Footer/Footer';
import NoDataFound from '../NoDataFound/NoDataFound';
import { TRIP_JSON } from './Trip.json.js';
import './trip.css'
import TripCard from './TripCard';

function TripPage() {
  console.log("json", TRIP_JSON)
  const [json, setJson] = useState(TRIP_JSON || []);
  const [filterType, setFilterType] = useState([]);
  const [slider, setSlider] = useState(0);
  const [duration, setDuration]=useState([])


  useEffect(() => {
    setJson(TRIP_JSON)
    if (filterType.length > 0) {
      const updatedJson = TRIP_JSON.filter(item => filterType.includes(item?.type?.id));
      setJson(updatedJson);
    }

  }, [filterType]);

   useEffect(
     ()=>{
       if(slider >0 ) {
         const filteredData = TRIP_JSON.filter(( item ) => {
           const itemPrice = parseInt(item.premium.id);
           const lowerBound = slider - 500; // Define the lower bound of the range
           const upperBound = slider + 500; // Define the upper bound of the range

           // Check if the item's price falls within the defined range
           return itemPrice >= lowerBound && itemPrice <= upperBound;
         });
         setJson(filteredData)
       }else setJson(TRIP_JSON)
     },
     [slider]
   );

   useEffect(()=>{
     setJson(TRIP_JSON)
     if (filterType.length > 0) {
       const updatedJson = TRIP_JSON.filter(item => duration.includes(item?.type?.id));
       setJson(updatedJson);
     }
   },[duration])


  const handleCheckboxChange = ( event ) => {
    const value = parseInt(event.target.value);
    if (filterType.includes(value)) {
      setFilterType(filterType.filter(item => item !== value));
    } else {
      setFilterType([...filterType, value]);
    }
  };
  const handleDuration = ( event ) => {
    const value = parseInt(event.target.value);
    if (duration.includes(value)) {
      setDuration(duration.filter(item => item !== value));
    } else {
      setDuration([...duration, value]);
    }
  };
  const handleSliderChange = (event) => {
    setSlider(parseInt(event.target.value, 10));
  };

  return (
    <>
    <div className='main-container'>
      <div className='container-left'>
        <div className='title'><strong>Category-type</strong></div>
        <TypeFilter onChange={handleCheckboxChange}/>
        <div className='trip-slider'>Price
          <div className='Slider'>
            <TripSlider
              onChange={handleSliderChange}
              value={slider}/>
          </div>
        </div>
        <div className='duration-filter'>
          <DurationFilter
            onChange={handleDuration}/>
        </div>

      </div>
      {!!json.length ? <TripCard tripJson={json}/> : <NoDataFound/>}
    </div>
      <div className='trip-footer'>
        <Footer/>
      </div>
    </>
  )
}

export default TripPage
