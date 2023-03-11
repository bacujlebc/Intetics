import React, { memo, useReducer } from 'react';

import { VSpacer } from 'shared-components'
import { SearchBar, SortList, FilterList, ProductList } from "components";

import { reducer, initialState } from 'state-management/reducer'

import styles from './index.module.css'


const DashboardView = () => {
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

                <ProductList
                    text={text}
                    colors={colors}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    sort={sort}
                    dispatch={dispatch}
                />
            </div>
        </main>
    )
}

export default memo(DashboardView);