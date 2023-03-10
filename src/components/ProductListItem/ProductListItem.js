import React from 'react';

import styles from './index.module.css'

const Row = ({ label, value }) => {

  return (
    <div className={styles.productAttributesRow}>
      <h5>{label}</h5>
      <p>{value}</p>
    </div>
  )
}

const ProductListItem = ({
  title, 
  description,
  color,
  price,
  rating,
  image,
}) => {

    return (
        <div className={styles.productItem} data-testid="product-list_item">
            <img
              src={image}
              alt="product image"
            />
            <h4 data-testid="product-title">{title}</h4>
            AED {price}
        </div>
    )
}

export default ProductListItem;