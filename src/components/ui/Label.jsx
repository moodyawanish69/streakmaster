// Label component - text labels for form inputs
import React from 'react';
import PropTypes from 'prop-types';

export function Label({ htmlFor, className = '', children }) 
{
  return (
    <label htmlFor={htmlFor} className={`text-sm ${className}`}>
      {children}
    </label>
  );
}

Label.propTypes = 
{
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};
