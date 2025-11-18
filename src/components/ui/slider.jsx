// Slider component - range input for selecting numbers
import React from 'react';
import PropTypes from 'prop-types';

export function Slider({ value, onValueChange, min = 0, max = 100, step = 1, className }) 
{
  // Get the current value (handle array or single number)
  const v = Array.isArray(value) ? value[0] : value ?? min;
  
  // Handle when user moves the slider
  const handleChange = (e) => 
  {
    const num = Number(e.target.value);
    onValueChange && onValueChange([num]);
  };
  
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={v}
      onChange={handleChange}
      className={className}
      style={{ width: '100%', accentColor: '#FF3B30' }}
    />
  );
}

Slider.propTypes = 
{
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  onValueChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  className: PropTypes.string
};
