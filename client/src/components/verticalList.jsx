import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = (props) => {
  const { someProp } = props;

  return (
    <div>
      {someProp}
    </div>
  );
};

MyComponent.propTypes = {
  someProp: PropTypes.string.isRequired,
};

export default MyComponent;
