import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';


const Checkbox = ({ label, testId, onChange, value }) => {
    const [checked, setChecked] = useState(value);

    const onChangeHandler = () => {
        setChecked(!checked);
        onChange();
    }

  return (
    <div
        className={styles.checkboxWrapper}
        data-testid={`${testId}-wrapper`}>
        
        <input
            id={testId}
            className={styles.checkbox}
            type='checkbox'
            data-testid={testId}
            onChange={onChangeHandler}
            checked={checked}
        />
        
        <label
            htmlFor={testId}
            data-testid={`${testId}-label`}
        >
            {label}
        </label>
    </div>
  )
}

Checkbox.propTypes = {
    label: PropTypes.string,
    testid: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.bool
};

Checkbox.defaultProps = {
    label: '',
    testId: 'checkbox',
    value: false,
    onChange: () => {}
};

export default Checkbox;
