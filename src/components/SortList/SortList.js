import React, { useCallback, memo } from 'react';

import filterPropTypes from 'propTypes/filterPropTypes'
import { SORT_OPTIONS } from './constants';

import styles from './index.module.css';

const SortList = ({ sort, dispatch }) => {
    const onSelectOption = useCallback((e) => {
        const value = e.target.value;
        dispatch({ type: "SET_SORT_OPTION", payload: value })
    }, [dispatch])

    return (
        <select
            className={styles.list}
            data-testid="sort-list"
            aria-label="Select with sort options"
            onChange={onSelectOption}
            value={sort}
        >
            {
                SORT_OPTIONS.map(sortOption => 
                    <option
                        key={sortOption}
                        data-testid="sort-list_option"
                        aria-label='Sort option'
                        value={sortOption}
                    >
                        {sortOption}
                    </option>
                )
            }
        </select>
    )
}

SortList.propTypes = {
    sort: filterPropTypes.sort,
    dispatch: filterPropTypes.dispatch,
};

SortList.defaultProps = {
};

export default memo(SortList);