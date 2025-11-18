// Card component - container with border and padding
import React from 'react';
import PropTypes from 'prop-types';
import { cn } from './helpers.js';

export function Card({ className, children, ...props }) 
{
  return (
    <div className={cn('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border', className)} {...props}>
      {children}
    </div>
  );
}

Card.propTypes = 
{
  className: PropTypes.string,
  children: PropTypes.node
};
