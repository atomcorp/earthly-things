import React from 'react';

const Stock = ({values}) => {
  return (
    <div className="stock" style={{color: assignColour(values.change)}}>
      <div className="stock__content">
        <span>{values.title}</span>
        <span>{values.change}</span>
        <span>{values.price}</span>
        <span>{values.percentage}</span>
      </div>
      
    
    </div>
  )
}

const assignColour = (change) => {
  return Number(change) > 0 ? 'green' : 'red';
}

export default Stock;