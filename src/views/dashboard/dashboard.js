import React, { memo } from 'react';

import { VSpacer } from 'shared-components'
import { SearchBar, SortList, FilterList } from "components";

import filterPropTypes from 'propTypes/filterPropTypes';

import styles from './index.module.css'


const DashboardView = ({
    renderProducts,
    text,
    colors,
    minPrice,
    maxPrice,
    sort,
    dispatch,
    productsCount,
}) => {

    return (
        <main className={styles.wrapper} data-testid="dashboard-wrapper">
            <SearchBar text={text} dispatch={dispatch} />
            <VSpacer />

            <SortList sort={sort} dispatch={dispatch} />
            <VSpacer />

            <div className={styles.mainView}>
                <section>
                    <FilterList
                        colors={colors}
                        minPrice={minPrice}
                        maxPrice={maxPrice}
                        dispatch={dispatch}
                    />
                    <div name="total-products">Total products: {productsCount}</div>
                </section>
                
                {renderProducts()}
            </div>
    
          
        </main>
    )
}

DashboardView.propTypes = filterPropTypes;

DashboardView.defaultProps = {
};

export default memo(DashboardView);