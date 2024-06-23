import React from 'react';
import { FaLeaf } from 'react-icons/fa';

const LogoText = () => (
  <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
    <defs>
      {/* Define a shadow filter */}
      <filter>
        <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
        <feOffset in="blur" dx="3" dy="3" result="offsetBlur" />
        <feMerge>
          <feMergeNode in="offsetBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dy=".35em"
      fontSize="30"
      fontWeight="700"
      fill="#4CBB17"
      fontFamily='Georgia'
      filter="url(#shadow)"
      style={{ border: "1px solid white", borderRadius: "50px" }}
    >
      M E
      <tspan dx="5">
        <FaLeaf />
      </tspan>
    </text>
  </svg>
);

export default LogoText;
