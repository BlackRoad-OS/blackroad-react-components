import React from 'react';
import { colors, borderRadius, spacing } from '../../theme';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'pink';
  size?: 'sm' | 'md';
  children: React.ReactNode;
}

const getVariantStyles = (variant: BadgeProps['variant']) => {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    fontWeight: 500,
    borderRadius: borderRadius.full,
  };

  switch (variant) {
    case 'success':
      return {
        ...base,
        background: `${colors.success}20`,
        color: colors.success,
      };
    case 'warning':
      return {
        ...base,
        background: `${colors.warning}20`,
        color: colors.warning,
      };
    case 'error':
      return {
        ...base,
        background: `${colors.error}20`,
        color: colors.error,
      };
    case 'info':
      return {
        ...base,
        background: `${colors.info}20`,
        color: colors.info,
      };
    case 'pink':
      return {
        ...base,
        background: `${colors.hotPink}20`,
        color: colors.hotPink,
      };
    default:
      return {
        ...base,
        background: colors.gray[800],
        color: colors.gray[300],
      };
  }
};

const getSizeStyles = (size: BadgeProps['size']) => {
  switch (size) {
    case 'sm':
      return {
        padding: `2px ${spacing.xs}`,
        fontSize: '11px',
      };
    default:
      return {
        padding: `4px ${spacing.sm}`,
        fontSize: '12px',
      };
  }
};

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  children,
  style,
  ...props
}) => {
  const variantStyles = getVariantStyles(variant);
  const sizeStyles = getSizeStyles(size);

  const combinedStyles: React.CSSProperties = {
    ...variantStyles,
    ...sizeStyles,
    ...style,
  };

  return (
    <span style={combinedStyles} {...props}>
      {children}
    </span>
  );
};

export default Badge;
