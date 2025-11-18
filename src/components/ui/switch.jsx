// Switch component - toggle on/off button
import React from 'react';
import PropTypes from 'prop-types';

export function Switch({ defaultChecked = false, onChange, className, ...props }) 
{
  // Track if switch is on or off
  const [checked, setChecked] = React.useState(!!defaultChecked);
  
  // Handle toggle click
  const toggle = () => 
  {
    const next = !checked;
    setChecked(next);
    onChange && onChange(next);
  };
  
  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={checked}
      className={className}
      {...props}
    >
      <span className={`inline-block w-12 h-6 rounded-full transition-colors ${checked ? 'bg-[#FF3B30]' : 'bg-[#2a2a2a]'}`}>
        <span className={`block w-5 h-5 bg-white rounded-full transform transition-transform ${checked ? 'translate-x-6' : 'translate-x-1'}`} />
      </span>
    </button>
  );
}

Switch.propTypes = 
{
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string
};
