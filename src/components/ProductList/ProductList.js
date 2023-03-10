import React, { useEffect, useState, memo } from 'react';
import ProductListItem from '../ProductListItem/ProductListItem'

import filterPropTypes from 'propTypes/filterPropTypes'

import styles from './index.module.css'

const sortProducts = (products, sort) => {
  return products.sort((a, b) => {
    if (sort === 'ASC') {
      return a.price - b.price
    }

    if (sort === 'DESC') {
      return b.price - a.price
    }

    if (sort === 'POPULAR_FIRST') {
      return b.rating - a.rating
    }
  })
}

const filterSortProducts = (
  products,
  text,
  colors,
  minPrice,
  maxPrice,
  sort,
) => {
  const filteredProducts = sortProducts(products, sort).filter(product => {
    if (text && !product.title.toLowerCase().includes(text.toLowerCase())) {
      return false;
    }
    // Filter by colors
    if (colors.length && !colors.includes(product.color)) {
      return false;
    }
    // Filter by price
    if (minPrice && product.price < minPrice) {
      return false;
    }
    if (maxPrice && product.price > maxPrice) {
      return false;
    }
    return true;
  })
  
  return filteredProducts
}

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:9999/.netlify/functions/products')
        const products = await response.json();
        setProducts(products);
      } catch(error) {
        setError(error)
      } finally {
        setLoading(false);
      }
    }

    fetchProducts()
  }, [])


  return ({
    products,
    loading,
    error,
  })
}


const ProductList = ({
  text,
  colors,
  minPrice,
  maxPrice,
  sort,
  dispatch,
}) => {
  const { products } = useProducts()
  const filteredProducts = filterSortProducts(
    products,
    text,
    colors,
    minPrice,
    maxPrice,
    sort,
  )

  useEffect(() => {
    dispatch({ type: 'SET_PRODUCTS_COUNT', payload: filteredProducts.length })
  }, [filteredProducts.length])



  return (
      <div className={styles.productList} data-testid="product-list">
        {
          filteredProducts.map(product => <ProductListItem key={product.token} {...product} />)
        }
      </div>
  )
}

ProductList.propTypes = filterPropTypes;

ProductList.defaultProps = {
};

export default memo(ProductList);