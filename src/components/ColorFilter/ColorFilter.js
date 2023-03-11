import React, { useCallback, memo } from 'react';

import { FilterBlock, Checkbox } from 'shared-components'

import { COLORS } from './constants'

import filterPropTypes from 'propTypes/filterPropTypes'

import styles from './index.module.css'

const ColorFilter = ({ colors, dispatch }) => {
    const onColorSelect = useCallback((id) => {
        dispatch({ type: "SELECT_COLOR", payload: id })
    }, [dispatch])

    return (
        <FilterBlock label="Color">
            <fieldset
                testid='color_options'
                aria-label='Color filter'
                className={styles.colorFilterFieldset}
            >
            {
                COLORS.map(({ id, label, }) => 
                    <Checkbox
                        key={id}
                        label={label}
                        id={id}
                        onChange={() => onColorSelect(id)}
                        value={colors.includes(id)}
                    />
                )
            }
            </fieldset>
        </FilterBlock>
    )
}

ColorFilter.propTypes = {
    colors: filterPropTypes.colors,
    dispatch: filterPropTypes.dispatch,
};

ColorFilter.defaultProps = {
};

export default memo(ColorFilter);