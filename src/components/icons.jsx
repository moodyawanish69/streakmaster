// All the icon components used in the app
import React from 'react';
import PropTypes from 'prop-types';

// Base SVG wrapper component
function Svg({ children, className, stroke = 'currentColor', fill = 'none', strokeWidth = 2, ...rest }) 
{
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

Svg.propTypes = 
{
  children: PropTypes.node,
  className: PropTypes.string,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

// Fire/flame icon
export const Flame = (props) => (
  <Svg {...props}>
    <path d="M14 9c0 1.657-1.343 3-3 3-1.657 0-3-1.343-3-3 0-3 3-6 3-6s3 3 3 6Z"/>
    <path d="M5 14c0 3.866 3.134 7 7 7s7-3.134 7-7c0-5-5-9-5-9s1 3-2 6c-1 1-2 1-2 1"/>
  </Svg>
);

// Trophy/achievement icon
export const Trophy = (props) => (
  <Svg {...props}>
    <path d="M8 21h8M12 17c3.866 0 7-3.134 7-7V5H5v5c0 3.866 3.134 7 7 7Z"/>
    <path d="M5 8a3 3 0 0 1-3-3V5h3m16 3a3 3 0 0 0 3-3V5h-3"/>
  </Svg>
);

// Shield icon
export const Shield = (props) => (
  <Svg {...props}>
    <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4Z"/>
  </Svg>
);

// Calendar icon
export const Calendar = (props) => (
  <Svg {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <path d="M16 2v4M8 2v4M3 10h18"/>
  </Svg>
);

// Bar chart icon
export const BarChart3 = (props) => (
  <Svg {...props}>
    <rect x="3" y="11" width="4" height="10"/>
    <rect x="10" y="6" width="4" height="15"/>
    <rect x="17" y="2" width="4" height="19"/>
  </Svg>
);

// User profile icon
export const User = (props) => (
  <Svg {...props}>
    <path d="M20 21a8 8 0 1 0-16 0"/>
    <circle cx="12" cy="7" r="4"/>
  </Svg>
);

// Shield with alert icon
export const ShieldAlert = (props) => (
  <Svg {...props}>
    <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4Z"/>
    <path d="M12 8v5M12 18h.01"/>
  </Svg>
);

// Lightning bolt icon
export const Zap = (props) => (
  <Svg {...props}>
    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8Z"/>
  </Svg>
);

// X/close icon
export const X = (props) => (
  <Svg {...props}>
    <path d="M18 6 6 18M6 6l12 12"/>
  </Svg>
);

// Sparkles icon
export const Sparkles = (props) => (
  <Svg {...props}>
    <path d="M5 3l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4Z"/>
    <path d="M19 11l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z"/>
  </Svg>
);

// Left arrow icon
export const ArrowLeft = (props) => (
  <Svg {...props}>
    <path d="M19 12H5"/>
    <path d="M12 19l-7-7 7-7"/>
  </Svg>
);

// Trending up icon
export const TrendingUp = (props) => (
  <Svg {...props}>
    <path d="M3 17l6-6 4 4 8-8"/>
    <path d="M14 7h7v7"/>
  </Svg>
);

// Open book icon
export const BookOpen = (props) => (
  <Svg {...props}>
    <path d="M12 3c-2.5 0-5 1-7 2v14c2-1 4.5-2 7-2s5 1 7 2V5c-2-1-4.5-2-7-2Z"/>
    <path d="M12 3v14"/>
  </Svg>
);

// Target icon
export const Target = (props) => (
  <Svg {...props}>
    <circle cx="12" cy="12" r="8"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>
  </Svg>
);

// Bell/notification icon
export const Bell = (props) => (
  <Svg {...props}>
    <path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </Svg>
);

// Edit/pencil icon
export const Edit = (props) => (
  <Svg {...props}>
    <path d="M12 20h9"/>
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"/>
  </Svg>
);

// Mail/envelope icon
export const Mail = (props) => (
  <Svg {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2"/>
    <path d="m3 7 9 6 9-6"/>
  </Svg>
);

// Lock icon
export const Lock = (props) => (
  <Svg {...props}>
    <rect x="5" y="11" width="14" height="10" rx="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </Svg>
);

// User with checkmark icon
export const UserCheck = (props) => (
  <Svg {...props}>
    <path d="M20 21a8 8 0 1 0-16 0"/>
    <circle cx="12" cy="7" r="4"/>
    <path d="m16 11 2 2 4-4"/>
  </Svg>
);

// Logout icon
export const LogOut = (props) => (
  <Svg {...props}>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <path d="M16 17l5-5-5-5"/>
    <path d="M21 12H9"/>
  </Svg>
);

// Dumbbell/gym icon
export const Dumbbell = (props) => (
  <Svg {...props}>
    <path d="M1 12h5M18 12h5"/>
    <rect x="6" y="9" width="12" height="6" rx="1"/>
  </Svg>
);

// Code icon
export const Code = (props) => (
  <Svg {...props}>
    <path d="M8 16l-4-4 4-4"/>
    <path d="M16 8l4 4-4 4"/>
    <path d="M14 4l-4 16"/>
  </Svg>
);

// Languages/translation icon
export const Languages = (props) => (
  <Svg {...props}>
    <path d="M5 8h14"/>
    <path d="M7 8c0 7 10 7 10 0"/>
    <path d="M3 4h18v16H3z"/>
  </Svg>
);
