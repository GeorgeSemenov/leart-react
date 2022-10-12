import React, {useState} from 'react';

function MySelect({options, defaultValue}){
  return(
    <div>
      <select>
        <option disabled value={defaultValue}>Сортир овка по названию</option>
        {
          options.map(option=>
            <option value={option.value}>{option.name}</option>    
          )
        }
        
      </select>
    </div>
  )
}

export default MySelect;