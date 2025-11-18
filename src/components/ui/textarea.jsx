// Textarea component - multiline text input
import React from 'react';
import PropTypes from 'prop-types';

export function Textarea({ className, ...props }) 
{
  return (
    <textarea
      className={`resize-none min-h-[200px] w-full rounded-2xl bg-[#0a0a0a] border border-[#2a2a2a] text-white px-3 py-2 outline-none focus:border-[#FF3B30] ${className || ''}`}
      {...props}
    />
  );
}

Textarea.propTypes = 
{
  className: PropTypes.string
};

// Also export with PascalCase alias to match screen imports
export { Textarea as TextArea };
