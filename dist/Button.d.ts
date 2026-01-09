/**
 * BlackRoad Button Component
 * Part of BlackRoad Design System
 *
 * @license PROPRIETARY - BlackRoad OS, Inc.
 */
import React from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}
export declare const Button: React.FC<ButtonProps>;
