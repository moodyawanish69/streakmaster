// Progress bar component - shows completion percentage
import React from 'react';
import PropTypes from 'prop-types';
import { cn } from './utils.js';

export function Progress({ value = 0, className }) 
{
  // Make sure value is between 0 and 100
  const pct = Math.max(0, Math.min(100, value));
  
  return (
    <div className={cn('w-full h-2 rounded-full bg-[#0a0a0a] overflow-hidden', className)}>
      <div className="h-full bg-gradient-to-r from-[#FF3B30] to-[#FFD60A]" style={{ width: pct + '%' }} />
    </div>
  );
}

Progress.propTypes = 
{
  value: PropTypes.number,
  className: PropTypes.string
};
