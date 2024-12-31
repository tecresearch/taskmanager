import { useState } from 'react';

const OpenSourceHeader = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      {/* The Tooltip */}
      {showTooltip && (
        <span className="absolute -top-6 left-0 text-xs text-gray-400">
          Explore Source Code
        </span>
      )}
      
      {/* Header */}
      <h1
        className="text-4xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6 text-gray-200 hover:cursor-pointer"
        onClick={() => window.open("https://github.com/tecresearch/taskmanager", "_blank")}
        onMouseEnter={() => setShowTooltip(true)}   // Show tooltip on hover
        onMouseLeave={() => setShowTooltip(false)}  // Hide tooltip when not hovered
      >
        Open Source TaskManager
      </h1>
    </div>
  );
};

export default OpenSourceHeader;
