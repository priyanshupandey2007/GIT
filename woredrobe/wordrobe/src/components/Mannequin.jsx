import React from 'react';

const Mannequin = ({ topColor, bottomColor, isMini = false }) => {
  const size = isMini
    ? { width: 60, height: 100 }
    : { width: 140, height: 260 };

  return (
    <svg
      width={size.width}
      height={size.height}
      viewBox="0 0 120 230"
      xmlns="http://www.w3.org/2000/svg"
      className="mannequin-svg"
    >
      {/* Neck Finial */}
      <path d="M52 10 L68 10 L66 20 L54 20 Z" fill="#D1D1D1" />
      <ellipse cx="60" cy="10" rx="8" ry="3" fill="#E8E8E8" />

      {/* Torso */}
      <path
        d="M35 35 Q60 30 85 35 L90 80 Q95 125 82 145 L38 145 Q25 125 30 80 Z"
        fill={topColor || '#2C2C2E'}
      />

      {/* Bottom */}
      {bottomColor && (
        <path d="M38 145 L82 145 L88 185 L32 185 Z" fill={bottomColor} />
      )}

      {/* Stand */}
      <rect x="58" y="185" width="4" height="35" fill="#A0A0A0" />

      {/* Base */}
      <g transform="translate(60, 220)">
        <path
          d="M-20 -5 L20 5 M-20 5 L20 -5"
          stroke="#1C1C1E"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="-18" cy="4" r="3" fill="#333" />
        <circle cx="18" cy="4" r="3" fill="#333" />
      </g>
    </svg>
  );
};

export default Mannequin;