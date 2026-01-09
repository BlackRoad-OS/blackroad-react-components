/**
 * BlackRoad Gradient Component
 * Implements Golden Ratio gradients from BlackRoad Design System
 *
 * @license PROPRIETARY - BlackRoad OS, Inc.
 */
import React from 'react';
export interface GradientProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'primary' | 'secondary' | 'tertiary';
    angle?: number;
    asText?: boolean;
}
export declare const Gradient: React.FC<GradientProps>;
