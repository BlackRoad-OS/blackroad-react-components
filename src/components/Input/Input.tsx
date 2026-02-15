import React from 'react';
import { colors, borderRadius, spacing, transitions } from '../../theme';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  style,
  ...props
}) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const containerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  };

  const labelStyles: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: 500,
    color: colors.gray[300],
  };

  const inputWrapperStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.xs,
    padding: `${spacing.xs} ${spacing.sm}`,
    borderRadius: borderRadius.md,
    border: `2px solid ${error ? colors.error : isFocused ? colors.hotPink : colors.gray[700]}`,
    background: colors.gray[900],
    transition: transitions.fast,
  };

  const inputStyles: React.CSSProperties = {
    flex: 1,
    background: 'transparent',
    border: 'none',
    outline: 'none',
    fontSize: '16px',
    color: colors.white,
    ...style,
  };

  const iconStyles: React.CSSProperties = {
    color: colors.gray[500],
    display: 'flex',
    alignItems: 'center',
  };

  const helperStyles: React.CSSProperties = {
    fontSize: '12px',
    color: error ? colors.error : colors.gray[500],
  };

  return (
    <div style={containerStyles}>
      {label && <label style={labelStyles}>{label}</label>}
      <div style={inputWrapperStyles}>
        {leftIcon && <span style={iconStyles}>{leftIcon}</span>}
        <input
          style={inputStyles}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {rightIcon && <span style={iconStyles}>{rightIcon}</span>}
      </div>
      {(error || helperText) && (
        <span style={helperStyles}>{error || helperText}</span>
      )}
    </div>
  );
};

export default Input;
