/**
 * BlackRoad Card Component
 * Part of BlackRoad Design System
 *
 * @license PROPRIETARY - BlackRoad OS, Inc.
 */

import React from 'react';
import { clsx } from 'clsx';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  gradient?: boolean;
}

export const Card: React.FC<CardProps> = ({
  hover = false,
  gradient = false,
  className,
  children,
  ...props
}) => {
  const baseStyles = 'rounded-[21px] p-[34px] backdrop-blur-[13px]';

  const backgroundStyles = gradient
    ? 'bg-gradient-to-br from-white/10 to-white/5'
    : 'bg-white/5';

  const hoverStyles = hover
    ? 'border-2 border-transparent hover:border-[#FF1D6C] hover:-translate-y-[8px] transition-all duration-300 cursor-pointer'
    : 'border-2 border-white/10';

  return (
    <div
      className={clsx(
        baseStyles,
        backgroundStyles,
        hoverStyles,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
