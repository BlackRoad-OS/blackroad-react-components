import React from 'react';
import { colors, gradients, borderRadius, spacing, transitions, shadows } from '../../theme';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  gradient?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

const getVariantStyles = (variant: ButtonProps['variant'], gradient: boolean) => {
  const base = {
    border: 'none',
    cursor: 'pointer',
    fontWeight: 600,
    transition: transitions.normal,
  };

  switch (variant) {
    case 'primary':
      return {
        ...base,
        background: gradient ? gradients.brand : colors.hotPink,
        color: colors.white,
        boxShadow: shadows.md,
      };
    case 'secondary':
      return {
        ...base,
        background: colors.gray[800],
        color: colors.white,
      };
    case 'outline':
      return {
        ...base,
        background: 'transparent',
        color: colors.hotPink,
        border: `2px solid ${colors.hotPink}`,
      };
    case 'ghost':
      return {
        ...base,
        background: 'transparent',
        color: colors.white,
      };
    default:
      return base;
  }
};

const getSizeStyles = (size: ButtonProps['size']) => {
  switch (size) {
    case 'sm':
      return {
        padding: `${spacing.xs} ${spacing.sm}`,
        fontSize: '14px',
        borderRadius: borderRadius.md,
      };
    case 'lg':
      return {
        padding: `${spacing.sm} ${spacing.lg}`,
        fontSize: '18px',
        borderRadius: borderRadius.lg,
      };
    default:
      return {
        padding: `${spacing.xs} ${spacing.md}`,
        fontSize: '16px',
        borderRadius: borderRadius.md,
      };
  }
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  gradient = false,
  fullWidth = false,
  loading = false,
  children,
  disabled,
  style,
  ...props
}) => {
  const variantStyles = getVariantStyles(variant, gradient);
  const sizeStyles = getSizeStyles(size);

  const combinedStyles: React.CSSProperties = {
    ...variantStyles,
    ...sizeStyles,
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled || loading ? 0.6 : 1,
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xs,
    ...style,
  };

  return (
    <button
      style={combinedStyles}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span style={{
          width: '16px',
          height: '16px',
          border: '2px solid transparent',
          borderTopColor: 'currentColor',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }} />
      )}
      {children}
    </button>
  );
};

export default Button;
