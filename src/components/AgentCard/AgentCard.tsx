import React from 'react';
import { colors, borderRadius, spacing, shadows, transitions, gradients } from '../../theme';
import { StatusPill } from '../StatusPill';

export interface AgentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  role?: string;
  status: 'online' | 'offline' | 'busy' | 'away';
  avatar?: string;
  tasks?: number;
  uptime?: string;
}

export const AgentCard: React.FC<AgentCardProps> = ({
  name,
  role,
  status,
  avatar,
  tasks,
  uptime,
  style,
  ...props
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const containerStyles: React.CSSProperties = {
    background: colors.gray[900],
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.sm,
    transition: transitions.normal,
    border: `1px solid ${isHovered ? colors.hotPink : colors.gray[800]}`,
    transform: isHovered ? 'translateY(-2px)' : 'none',
    boxShadow: isHovered ? shadows.glow : 'none',
    ...style,
  };

  const headerStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.sm,
  };

  const avatarStyles: React.CSSProperties = {
    width: '48px',
    height: '48px',
    borderRadius: borderRadius.full,
    background: avatar ? `url(${avatar}) center/cover` : gradients.brand,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: 700,
    color: colors.white,
  };

  const infoStyles: React.CSSProperties = {
    flex: 1,
  };

  const nameStyles: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: 600,
    color: colors.white,
    margin: 0,
  };

  const roleStyles: React.CSSProperties = {
    fontSize: '13px',
    color: colors.gray[400],
    margin: 0,
  };

  const statsStyles: React.CSSProperties = {
    display: 'flex',
    gap: spacing.md,
    paddingTop: spacing.xs,
    borderTop: `1px solid ${colors.gray[800]}`,
  };

  const statStyles: React.CSSProperties = {
    fontSize: '12px',
    color: colors.gray[400],
  };

  const statValueStyles: React.CSSProperties = {
    color: colors.white,
    fontWeight: 600,
  };

  return (
    <div
      style={containerStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <div style={headerStyles}>
        <div style={avatarStyles}>
          {!avatar && name.charAt(0).toUpperCase()}
        </div>
        <div style={infoStyles}>
          <p style={nameStyles}>{name}</p>
          {role && <p style={roleStyles}>{role}</p>}
        </div>
        <StatusPill status={status} pulse={status === 'online'} />
      </div>

      {(tasks !== undefined || uptime) && (
        <div style={statsStyles}>
          {tasks !== undefined && (
            <span style={statStyles}>
              Tasks: <span style={statValueStyles}>{tasks}</span>
            </span>
          )}
          {uptime && (
            <span style={statStyles}>
              Uptime: <span style={statValueStyles}>{uptime}</span>
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default AgentCard;
