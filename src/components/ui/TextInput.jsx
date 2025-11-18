import React from 'react';
import PropTypes from 'prop-types';
import { cn } from './helpers.js';

export function Input({ className, ...props }) {
  return (
    <input
      className={cn('h-10 w-full rounded-md border bg-input-background px-3 text-base text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:ring-2 focus:ring-ring/50', className)}
      {...props}
    />
  );
}

Input.propTypes = {
  className: PropTypes.string
};
