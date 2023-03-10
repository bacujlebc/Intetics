import { useReducer } from "react";

import { ProductList } from "components";

import { reducer, initialState } from './state-management/reducer';

import { DashboardView } from './views'

const App = () => {
  const [filters, dispatch] = useReducer(reducer, initialState);
  const {
    text,
    colors,
    price: {
      min: minPrice,
      max: maxPrice,
    },
    sort,
    productsCount,
  } = filters

  return (
    <DashboardView
      text={text}
      colors={colors}
      minPrice={minPrice}
      maxPrice={maxPrice}
      sort={sort}
      productsCount={productsCount}

      renderProducts={() =>
        <ProductList
          text={text}
          colors={colors}
          minPrice={minPrice}
          maxPrice={maxPrice}
          sort={sort}
          dispatch={dispatch}
        />
      }
      dispatch={dispatch}
    />
  );
}

export default App;
