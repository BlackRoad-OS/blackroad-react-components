import React from 'react';
import { colors, borderRadius, spacing } from '../../theme';

export interface StatusPillProps extends React.HTMLAttributes<HTMLDivElement> {
  status: 'online' | 'offline' | 'busy' | 'away' | 'success' | 'error' | 'warning';
  label?: string;
  showDot?: boolean;
  pulse?: boolean;
}

const statusColors = {
  online: colors.success,
  offline: colors.gray[500],
  busy: colors.error,
  away: colors.warning,
  success: colors.success,
  error: colors.error,
  warning: colors.warning,
};

export const StatusPill: React.FC<StatusPillProps> = ({
  status,
  label,
  showDot = true,
  pulse = false,
  style,
  ...props
}) => {
  const color = statusColors[status];

  const containerStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: spacing.xs,
    padding: `4px ${spacing.sm}`,
    borderRadius: borderRadius.full,
    background: `${color}15`,
    fontSize: '12px',
    fontWeight: 500,
    color: color,
    ...style,
  };

  const dotStyles: React.CSSProperties = {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: color,
    boxShadow: pulse ? `0 0 0 0 ${color}` : 'none',
    animation: pulse ? 'pulse 2s infinite' : 'none',
  };

  return (
    <div style={containerStyles} {...props}>
      {showDot && <span style={dotStyles} />}
      {label || status.charAt(0).toUpperCase() + status.slice(1)}
    </div>
  );
};

export default StatusPill;
