import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css'

const Button = ({
    label,
    testId,
    onClick,
    className
}) => {

    const classnames = `
        ${styles.button}
        ${className}
    `

    return (
        <button
            className={classnames}
            data-testid={testId}
            onClick={onClick}
            aria-label="Button"
        >
            {label}
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string,
    testId: PropTypes.string,
    className: PropTypes.string,
};
  
Button.defaultProps = {
    func: () => {},
    label: '',
    testId: 'button',
    className: ''
};

export default Button;
