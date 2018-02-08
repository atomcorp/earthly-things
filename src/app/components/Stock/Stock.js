import React from 'react';
import styles from './Stock.module.css';

const Stock = ({values}) => {
  return (
    <div className={styles.stock} style={{color: assignColour(values.change)}}>
      {values.title}
      {values.change}
      {values.price}
      {values.percentage}    
    </div>
  )
}

const assignColour = (change) => {
  return Number(change) > 0 ? 'green' : 'red';
}

export default Stock;