import { clsx } from 'clsx';

/**
 * Merge class names.
 * @param  {...any} inputs
 */
export function cn(...inputs) {
  return clsx(inputs);
}
