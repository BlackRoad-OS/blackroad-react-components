/**
 * BlackRoad Gradient Component
 * Implements Golden Ratio gradients from BlackRoad Design System
 *
 * @license PROPRIETARY - BlackRoad OS, Inc.
 */

import React from 'react';
import { clsx } from 'clsx';

export interface GradientProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  angle?: number;
  asText?: boolean;
}

export const Gradient: React.FC<GradientProps> = ({
  variant = 'primary',
  angle = 135,
  asText = false,
  className,
  children,
  ...props
}) => {
  const gradients = {
    // Golden Ratio color stops: 38.2% and 61.8%
    primary: `linear-gradient(${angle}deg, #FF1D6C 38.2%, #F5A623 61.8%)`,
    secondary: `linear-gradient(${angle}deg, #9C27B0 38.2%, #2979FF 61.8%)`,
    tertiary: `linear-gradient(${angle}deg, #F5A623 38.2%, #2979FF 61.8%)`,
  };

  if (asText) {
    return (
      <span
        className={clsx(
          'bg-clip-text text-transparent',
          className
        )}
        style={{
          backgroundImage: gradients[variant],
        }}
        {...props}
      >
        {children}
      </span>
    );
  }

  return (
    <div
      className={clsx(className)}
      style={{
        backgroundImage: gradients[variant],
      }}
      {...props}
    >
      {children}
    </div>
  );
};
