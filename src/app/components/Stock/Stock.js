import React from 'react';

const Stock = ({values}) => {
  return (
    <div className="stock">
      {values.title}
      {values.price}
      {values.change}
    </div>
  )
}

export default Stock;