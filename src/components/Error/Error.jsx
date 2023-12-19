import React from 'react';
import PropTypes from 'prop-types';

function Error({ error, errorReset }) {
  return (
    <div>
      <p>Something went wrong:</p>
      <p>{error.message}</p>
      {errorReset}
    </div>
  );
}

Error.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired,
  errorReset: PropTypes.func
};

Error.defaultProps = {
  errorReset: null
};

export default Error;
