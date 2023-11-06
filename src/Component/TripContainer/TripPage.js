import React, { useEffect, useState } from 'react'
import Pagination from '../../Common/Pagination/Pagination';
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
  const [duration, setDuration] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageInput, setPageInput] = useState('');
  const [pageNoError, setPageNoError] = useState({ error: false, message: '' });


  useEffect(() => {
    setJson(TRIP_JSON)
    if (filterType.length > 0) {
      const updatedJson = TRIP_JSON.filter(item => filterType.includes(item?.type?.id));
      setJson(updatedJson);
    }

  }, [filterType]);

  useEffect(
    () => {
      if (slider > 0) {
        const filteredData = TRIP_JSON.filter(( item ) => {
          const itemPrice = parseInt(item.premium.id);
          const lowerBound = slider - 500; // Define the lower bound of the range
          const upperBound = slider + 500; // Define the upper bound of the range

          // Check if the item's price falls within the defined range
          return itemPrice >= lowerBound && itemPrice <= upperBound;
        });
        setJson(filteredData)
      } else setJson(TRIP_JSON)
    },
    [slider]
  );

  useEffect(() => {
    setJson(TRIP_JSON)
    if (duration.length > 0) {
      const updatedJson = TRIP_JSON.filter(item => duration.includes(item?.type?.id));
      setJson(updatedJson);
    }
  }, [duration])


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
  const handleSliderChange = ( event ) => {
    setSlider(parseInt(event.target.value, 10));
  };

  const itemsPerPage = 4;
  const data = [...json];
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const pageCount = Math.ceil(currentItems.length / itemsPerPage);


  // Pagination handler functions
  const nextPage = () => setCurrentPage(( prevPage ) => prevPage + 1);
  const prevPage = () => setCurrentPage(( prevPage ) => prevPage - 1);

  return (
    <>
      <div className='main-container'>
        <div className='container-left'>
          <div className='title'><strong>Category-type</strong></div>
          <TypeFilter onChange={handleCheckboxChange}/>
          <div className='trip-slider'><strong>Price</strong>
            <div className='Slider'>
              <TripSlider
                onChange={handleSliderChange}
                value={slider}/>
            </div>
          </div>
          <div className='duration-filter'>
            <div className='trip-duration'><strong>Duration</strong></div>
            <DurationFilter
              onChange={handleDuration}/>
          </div>

        </div>
        {!!json.length ? <TripCard tripJson={currentItems}/> : <NoDataFound/>}
      </div>
      {!!json.length &&
        <div className="table-navigator">
          <div className="table-navigator-inner">
            <Pagination
              prevPage={prevPage}
              currentPage={currentPage}
              nextPage={nextPage}
              indexOfLastItem={indexOfLastItem}
              data={json}
              totalPages={pageCount}
              handlePageChange={( value ) => setPageInput(value)}
              pageInput={pageInput}
              pageNoError={pageNoError}
            />
          </div>
        </div>
      }
      <div className='trip-footer'>
        <Footer/>
      </div>
    </>
  )
}

export default TripPage
