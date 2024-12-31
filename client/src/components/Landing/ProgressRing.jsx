import React, { useState } from 'react';

const ProgressRing = ({ progress, label }) => {
  const radius = 40;
  const stroke = 8;
  const circumference = 2 * Math.PI * radius;
  const [hovered, setHovered] = useState(false);

  const strokeDashoffset = circumference - (progress / 100) * circumference;
  const animatedStrokeDashoffset = hovered ? strokeDashoffset : circumference;

  return (
    <div
      className="flex flex-col items-center group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg width="100" height="100">
        {/* Background Circle (inactive) */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={stroke}
          fill="transparent"
        />
        {/* Foreground Circle (active, animated on hover) */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#3b82f6"
          strokeWidth={stroke}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={animatedStrokeDashoffset}
          className="transition-all duration-500 ease-in-out"
        />
      </svg>
      <p className="text-white mt-4">{label}</p>
      <p className="text-white text-sm">{progress}%</p>
    </div>
  );
};

export default ProgressRing;
