import React from 'react';
import { gradients } from '../../theme';

export interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'brand' | 'hotPink' | 'amber' | 'blue';
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  children: React.ReactNode;
}

export const GradientText: React.FC<GradientTextProps> = ({
  variant = 'brand',
  as: Component = 'span',
  children,
  style,
  ...props
}) => {
  const gradientStyles: React.CSSProperties = {
    background: gradients[variant],
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    display: 'inline-block',
    ...style,
  };

  return (
    <Component style={gradientStyles} {...props}>
      {children}
    </Component>
  );
};

export default GradientText;
