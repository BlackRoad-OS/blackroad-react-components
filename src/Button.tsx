/**
 * BlackRoad Button Component
 * Part of BlackRoad Design System
 *
 * @license PROPRIETARY - BlackRoad OS, Inc.
 */

import React from 'react';
import { clsx } from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  children,
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary: 'bg-gradient-to-r from-[#FF1D6C] to-[#9C27B0] text-white hover:opacity-90 active:scale-95',
    secondary: 'bg-gradient-to-r from-[#F5A623] to-[#2979FF] text-white hover:opacity-90 active:scale-95',
    ghost: 'bg-transparent border-2 border-[#FF1D6C] text-[#FF1D6C] hover:bg-[#FF1D6C] hover:text-white',
  };

  const sizeStyles = {
    sm: 'px-[13px] py-[8px] text-[13px]',
    md: 'px-[21px] py-[13px] text-[16px]',
    lg: 'px-[34px] py-[21px] text-[21px]',
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
