import React from 'react';
import PropTypes from 'prop-types';

import { Button, VSpacer } from '../'

import styles from './index.module.css'

const FilterBlock = ({ children, testid, label }) => {

    return (
        <>
            <div
                data-testid={`${testid}_wrapper`}
                aria-label='Filter block'
                className={styles.filterBlock}
            >
                <Button
                    label={label}
                    testid={`${testid}_btn`}
                />

                {children}
            </div>
            <VSpacer />
        </>
    )
}

FilterBlock.propTypes = {
    label: PropTypes.string,
    testId: PropTypes.string,
    children: PropTypes.any,
};

FilterBlock.defaultProps = {
    label: '',
    testId: 'filter-block',
    children: null
};

export default FilterBlock;