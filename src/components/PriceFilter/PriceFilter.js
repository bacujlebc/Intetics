import React, { useState, memo } from 'react';
import { VSpacer, FilterBlock } from 'shared-components';

import filterPropTypes from 'propTypes/filterPropTypes'

import { validatePrice } from './helpers'

const PriceFilter = ({ minPrice, maxPrice, dispatch }) => {
    const [error, setError] = useState('')

    const onChange = ({ target: { dataset: { testid }, value } }) => {
        if (validatePrice(value, minPrice, maxPrice, testid, error, setError)) {
            if (testid === "min-price") {
                dispatch({ type: "SET_MIN_PRICE", payload: parseInt(value) })    
            } else {
                dispatch({ type: "SET_MAX_PRICE", payload: parseInt(value) })
            }
        }
    }

    return (
        <>
            <FilterBlock label="Color">
                <div style={{ display: 'flex', justifyContent: 'center', paddingLeft: 0 }}>
                    <input
                        placeholder='min'
                        data-testid="min-price"
                        style={{ width: 55 }}
                        onChange={onChange}
                        value={minPrice}
                        type="number"
                    />
                    <span>&nbsp; - &nbsp;</span>
                    <input
                        placeholder='max'
                        data-testid="max-price"
                        style={{ width: 55 }}
                        onChange={onChange}
                        value={maxPrice}
                        type="number"
                    />
                </div>
                <span data-testid="error" style={{ color: 'red', fontSize: 11 }} >{error}</span>
            </FilterBlock>
            <VSpacer />
        </>
    )
}

PriceFilter.propTypes = {
    minPrice: filterPropTypes.minPrice,
    maxPrice: filterPropTypes.maxPrice,
    dispatch: filterPropTypes.dispatch,
};

PriceFilter.defaultProps = {
};

export default memo(PriceFilter);