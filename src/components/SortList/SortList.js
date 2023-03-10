import React, { useCallback, memo } from 'react';

import SortListItem from '../SortListItem/SortListItem'

import filterPropTypes from 'propTypes/filterPropTypes'

import styles from './index.module.css';

const SORT_OPTIONS = [
    {
        id: 'ASC',
        label: 'Price low to high'
    },
    {
        id: 'DESC',
        label: 'Price high to low'
    },
    {
        id: 'POPULAR_FIRST',
        label: 'Popular first'
    },
]

const SortList = ({ sort, dispatch }) => {
    const onSortOptionClick = useCallback((id) => {
        dispatch({ type: "SET_SORT_OPTION", payload: id })
    }, [])

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