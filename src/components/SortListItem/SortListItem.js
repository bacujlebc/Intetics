import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'shared-components'

import styles from './index.module.css'

const SortListItem = ({ label, activeSortOption, onClick }) => {
    const className = `
        ${styles.sortOptionBtn}
        ${ activeSortOption ? styles.activeSortOption : '' }
    `

    return (
        <Button
            className={className}
            label={label}
            onClick={onClick}
            data-testid="sort-option_btn"
        />
    )
}

SortListItem.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    activeSortOption: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

SortListItem.defaultProps = {
};

export default memo(SortListItem);