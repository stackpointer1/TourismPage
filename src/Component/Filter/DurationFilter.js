import React from 'react';
import { Duration } from './Filter.json';

function DurationFilter( { onChange } ) {
  return (
    <div className='type-filter'>
      {Duration.map(item => (
        <div key={item.id} className="checkbox-item">
          <input
            type="checkbox"
            id={item.id}
            name={item.name}
            value={item.id}
            onChange={onChange}
          />
          <label htmlFor={item.id}>{item.name}</label>
        </div>
      ))}
    </div>
  )
}

export default DurationFilter
