/**
 * BlackRoad Card Component
 * Part of BlackRoad Design System
 *
 * @license PROPRIETARY - BlackRoad OS, Inc.
 */
import React from 'react';
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hover?: boolean;
    gradient?: boolean;
}
export declare const Card: React.FC<CardProps>;
