import React from 'react';

export const TiktokIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg 
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.59-1.16-2.59-2.5 0-1.34 1.17-2.5 2.59-2.5.27 0 .53.04.77.12v-3.1a6.47 6.47 0 0 0-.77-.05c-3.09 0-5.59 2.51-5.59 5.6 0 3.09 2.5 5.6 5.59 5.6 3.09 0 5.59-2.51 5.59-5.6V9.16c1.09.72 2.39 1.14 3.77 1.14v-3.1c-.51 0-1-.07-1.46-.2z"
      fill="currentColor"
    />
  </svg>
);