import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'purple' | 'blue' | 'green' | 'gold' | 'pink' | 'slate';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'purple',
  size = 'md',
  className = ''
}) => {
  const variantStyles = {
    purple: 'bg-[#F0ECFF] text-[#5B3FD6] border-[#DDD5FF]',
    blue: 'bg-[#E6ECFF] text-[#3D58C7] border-[#D0DCFF]',
    green: 'bg-[#E4F3EA] text-[#36644B] border-[#CEE8D8]',
    gold: 'bg-amber-50 text-amber-800 border-amber-200/80',
    pink: 'bg-pink-50 text-pink-700 border-pink-200/80',
    slate: 'bg-[#FAF7F0] text-[#292631] border-beige-200'
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5',
    md: 'text-xs px-2.5 py-1'
  };

  return (
    <span className={`inline-flex items-center gap-1 font-semibold rounded-full border ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      {children}
    </span>
  );
};
