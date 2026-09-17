import React from 'react';

interface CircularProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
  sublabel?: string;
  color?: string;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  size = 140,
  strokeWidth = 12,
  label,
  sublabel,
  color = '#5B3FD6' // Primary Purple #5B3FD6
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex flex-col items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#F0ECFF"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-3xl font-black tracking-tight text-[#292631]">{Math.round(percentage)}%</span>
        {label && <span className="text-xs font-semibold text-charcoal-100 uppercase tracking-wider mt-0.5">{label}</span>}
      </div>
      {sublabel && (
        <span className="mt-2 text-xs text-charcoal-100 font-medium text-center">{sublabel}</span>
      )}
    </div>
  );
};
