import React  from 'react'
import { tripType } from './Filter.json';
function TypeFilter({onChange}) {

  return(
    <div className= 'type-filter'>
      {tripType.map(item => (
        <div key={item.id} className="checkbox-item">
          <input
            type="checkbox"
            id={item.id}
            name={item.name}
            value={item.id}
            // checked={selectedItems.includes(item.id)}
            onChange={onChange}
          />
          <label htmlFor={item.id}>{item.name}</label>
        </div>
      ))}
    </div>
  )
}
export default TypeFilter
