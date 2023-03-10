import React, { useCallback, useState, memo } from 'react';

import filterPropTypes from 'propTypes/filterPropTypes'

import styles from './index.module.css'

const SearchBar = ({ text, dispatch }) => {
    const [searchText, setSearchText] = useState(text);
    
    const onSearch = useCallback(({ target: { value } }) => {
        setSearchText(value);
        dispatch({ type: 'SET_SEARCH_TEXT', payload: value })
    }, [dispatch])

    return (
        <div aria-label="Search wrapper" data-testid="search" className={styles.search}>
            <input
                type="search"
                placeholder="Please type model name..."
                className={styles.search}
                aria-label="Search"
                data-testid="search-input"
                onChange={onSearch}
                value={searchText}
            />
            <img
                src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
                alt="search-icon"
                aria-label="Search icon"
                data-testid="search-icon"
                className={styles.searchIcon}
                style={searchText ? { display: 'none' } : { display: 'block' }}
            />
        </div>

    )
}

SearchBar.propTypes = {
    text: filterPropTypes.text,
    dispatch: filterPropTypes.dispatch,
};

SearchBar.defaultProps = {
};

export default memo(SearchBar);