import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Spacer is factors of 8px
const VSpacer = ({ factor, transition, testId }) => {
  
    return (
        <div
          data-testid={testId}
          style={{
            height: factor * 8,
            width: '100%',
            transition: transition ? 'height .2s ease-out' : '',
          }}
        />
    );
}

VSpacer.propTypes = {
  factor: PropTypes.number,
  transition: PropTypes.bool,
  testId: PropTypes.string,
};

VSpacer.defaultProps = {
  factor: 1,
  transition: false,
  testId: 'vspacer',
};

export default memo(VSpacer);