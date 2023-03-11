import React, { useCallback, memo } from 'react';

import SortListItem from '../SortListItem/SortListItem'

import filterPropTypes from 'propTypes/filterPropTypes'
import { SORT_OPTIONS } from './constants';

import styles from './index.module.css';

const SortList = ({ sort, dispatch }) => {
    const onSortOptionClick = useCallback((id) => {
        dispatch({ type: "SET_SORT_OPTION", payload: id })
    }, [dispatch])

    return (
        <section className={styles.list} data-testid="sort-list" aria-label="sort">
            {
                SORT_OPTIONS.map(({ id, label }) => 
                    <SortListItem
                        key={id}
                        id={id}
                        label={label}
                        activeSortOption={sort === id}
                        onClick={() => onSortOptionClick(id)}
                    />
                )
            }
        </section>
    )
}

SortList.propTypes = {
    sort: filterPropTypes.sort,
    dispatch: filterPropTypes.dispatch,
};

SortList.defaultProps = {
};

export default memo(SortList);