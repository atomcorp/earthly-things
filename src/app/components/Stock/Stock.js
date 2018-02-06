import React from 'react';

const Stock = ({values}) => {
  return (
    <div className="stock">
      {values.title} <br/>
      {values.price} <br/>
      {values.change} <br/>
      {values.percentage}
      <br/><br/>
    </div>
  )
}

export default Stock;