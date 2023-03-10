import React from 'react';

import styles from './index.module.css'

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
              alt="product_image"
            />
            <h4 data-testid="product-title">{title}</h4>
            AED {price}
        </div>
    )
}

export default ProductListItem;