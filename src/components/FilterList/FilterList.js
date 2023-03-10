import React, { memo } from 'react';

import ColorFilter from '../ColorFilter/ColorFilter'
import PriceFilter from '../PriceFilter/PriceFilter'

import filterPropTypes from 'propTypes/filterPropTypes'

import styles from './index.module.css'

const FilterList = ({ colors, minPrice, maxPrice, dispatch }) => {

    return (
        <section
            className={styles.filterList}
            name="filter-list"
            data-testid="filter-list"
            aria-label='Filters'
        >
            <ColorFilter colors={colors} dispatch={dispatch} />
            <PriceFilter minPrice={minPrice} maxPrice={maxPrice} dispatch={dispatch} />
        </section>
    )
}

FilterList.propTypes = {
    colors: filterPropTypes.colors,
    minPrice: filterPropTypes.minPrice,
    maxPrice: filterPropTypes.maxPrice,
    dispatch: filterPropTypes.dispatch,
};

FilterList.defaultProps = {
};

export default memo(FilterList);