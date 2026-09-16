import React from 'react';

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  sublabel?: string;
  showValueLabel?: boolean;
  height?: 'sm' | 'md' | 'lg';
  color?: 'purple' | 'blue' | 'green' | 'amber' | 'emerald';
  targetValue?: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  label,
  sublabel,
  showValueLabel = true,
  height = 'md',
  color = 'purple',
  targetValue
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  const targetPercentage = targetValue !== undefined ? Math.min(100, Math.max(0, (targetValue / max) * 100)) : undefined;

  const heightClasses = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-3.5'
  };

  const colorClasses = {
    purple: 'bg-[#5B3FD6]',
    blue: 'bg-[#6C8CFF]',
    green: 'bg-[#6FAF8B]',
    amber: 'bg-[#D9822B]',
    emerald: 'bg-[#6FAF8B]'
  };

  return (
    <div className="w-full">
      {(label || showValueLabel) && (
        <div className="flex justify-between items-center mb-1.5 text-xs">
          <div className="flex items-center gap-2">
            {label && <span className="font-semibold text-slate-700">{label}</span>}
            {sublabel && <span className="text-slate-400 font-normal">{sublabel}</span>}
          </div>
          {showValueLabel && (
            <div className="flex items-center gap-2 font-medium">
              {targetPercentage !== undefined ? (
                <span className="text-slate-600">
                  <span className="font-semibold text-brand-700">{percentage}%</span>
                  <span className="text-slate-400 mx-1">/</span>
                  <span className="text-slate-500">Target: {targetPercentage}%</span>
                </span>
              ) : (
                <span className="text-slate-600 font-semibold">{percentage}%</span>
              )}
            </div>
          )}
        </div>
      )}

      {/* Progress Track */}
      <div className={`w-full bg-lavender-100 rounded-full overflow-hidden relative ${heightClasses[height]}`}>
        {/* If target value exists, show target indicator line or backdrop */}
        {targetPercentage !== undefined && (
          <div 
            className="absolute top-0 bottom-0 bg-brand-200/60 rounded-full"
            style={{ width: `${targetPercentage}%` }}
          />
        )}
        {/* Main fill */}
        <div
          className={`${colorClasses[color]} h-full rounded-full transition-all duration-700 ease-out relative z-10`}
          style={{ width: `${percentage}%` }}
        />
        {/* Target tick if dual */}
        {targetPercentage !== undefined && (
          <div 
            className="absolute top-0 bottom-0 w-1 bg-brand-900 z-20"
            style={{ left: `calc(${targetPercentage}% - 2px)` }}
            title={`Target: ${targetPercentage}%`}
          />
        )}
      </div>
    </div>
  );
};
