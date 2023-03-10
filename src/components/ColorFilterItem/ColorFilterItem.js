import React from 'react';

const ColorFilterItem = ({ key, label }) => {

    return (
        <div>
            <input id={key} type="checkbox" />
            <label htmlFor={key}>{label}</label>
        </div>
    )
}

export default ColorFilterItem;