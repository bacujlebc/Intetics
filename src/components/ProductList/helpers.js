import { SORT_ENUM } from "components/SortList/constants"

const sortProducts = (products, sort) => {
    return products.sort((a, b) => {
      if (sort === SORT_ENUM.ASC) {
        return a.price - b.price
      }
  
      if (sort === SORT_ENUM.DESC) {
        return b.price - a.price
      }
  
      if (sort === SORT_ENUM.POPULAR_FIRST) {
        return b.rating - a.rating
      }
  
      return 0;
    })
  }
  
  export const filterSortProducts = (
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