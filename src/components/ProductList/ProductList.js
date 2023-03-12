import React, { useEffect, useState, memo } from 'react';
import ProductListItem from '../ProductListItem/ProductListItem'

import { filterSortProducts } from './helpers'

import filterPropTypes from 'propTypes/filterPropTypes'

import styles from './index.module.css'

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.REACT_APP_NETLIFY_FUNCTION_URL}.netlify/functions/products`)
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
  }, [filteredProducts.length, dispatch])

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