// Badge component - small pill-shaped labels
import React from 'react';
import PropTypes from 'prop-types';
import { cn } from './utils.js';

export function Badge({ className, children, ...props }) 
{
  return (
    <span className={cn('inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border', className)} {...props}>
      {children}
    </span>
  );
}

Badge.propTypes = 
{
  className: PropTypes.string,
  children: PropTypes.node
};
