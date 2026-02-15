import React from 'react';
import { colors, borderRadius, spacing, shadows, transitions } from '../../theme';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined' | 'glass';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hoverable?: boolean;
  children: React.ReactNode;
}

const getVariantStyles = (variant: CardProps['variant']) => {
  const base = {
    borderRadius: borderRadius.lg,
    transition: transitions.normal,
  };

  switch (variant) {
    case 'elevated':
      return {
        ...base,
        background: colors.gray[900],
        boxShadow: shadows.lg,
      };
    case 'outlined':
      return {
        ...base,
        background: 'transparent',
        border: `1px solid ${colors.gray[700]}`,
      };
    case 'glass':
      return {
        ...base,
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        border: `1px solid rgba(255, 255, 255, 0.1)`,
      };
    default:
      return {
        ...base,
        background: colors.gray[900],
      };
  }
};

const getPaddingStyles = (padding: CardProps['padding']) => {
  switch (padding) {
    case 'none':
      return { padding: 0 };
    case 'sm':
      return { padding: spacing.sm };
    case 'lg':
      return { padding: spacing.lg };
    default:
      return { padding: spacing.md };
  }
};

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = 'md',
  hoverable = false,
  children,
  style,
  ...props
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const variantStyles = getVariantStyles(variant);
  const paddingStyles = getPaddingStyles(padding);

  const combinedStyles: React.CSSProperties = {
    ...variantStyles,
    ...paddingStyles,
    transform: hoverable && isHovered ? 'translateY(-4px)' : 'none',
    boxShadow: hoverable && isHovered ? shadows.xl : variantStyles.boxShadow,
    ...style,
  };

  return (
    <div
      style={combinedStyles}
      onMouseEnter={() => hoverable && setIsHovered(true)}
      onMouseLeave={() => hoverable && setIsHovered(false)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
