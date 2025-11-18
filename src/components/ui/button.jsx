// Button component - reusable button with different styles
import React from 'react';
import PropTypes from 'prop-types';
import { cn } from './helpers.js';

export function Button({ className, variant = 'default', size = 'default', children, ...props }) 
{
  // Different button styles
  const variants = 
  {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    destructive: 'bg-destructive text-white hover:bg-destructive/90',
    outline: 'border bg-background text-foreground hover:bg-accent hover:text-accent-foreground',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline'
  };

  // Different button sizes
  const sizes = 
  {
    default: 'h-9 px-4 py-2',
    sm: 'h-8 rounded-md px-3',
    lg: 'h-10 rounded-md px-6',
    icon: 'size-9 rounded-md'
  };

  return (
    <button
      className={cn('inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-ring/50', variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = 
{
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default','destructive','outline','secondary','ghost','link']),
  size: PropTypes.oneOf(['default','sm','lg','icon']),
  children: PropTypes.node
};
