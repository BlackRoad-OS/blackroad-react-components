import React from 'react';
import { clsx } from 'clsx';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * BlackRoad Button Component
 * Part of BlackRoad Design System
 *
 * @license PROPRIETARY - BlackRoad OS, Inc.
 */
const Button = (_a) => {
    var { variant = 'primary', size = 'md', fullWidth = false, className, children } = _a, props = __rest(_a, ["variant", "size", "fullWidth", "className", "children"]);
    const baseStyles = 'font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
    const variantStyles = {
        primary: 'bg-gradient-to-r from-[#FF1D6C] to-[#9C27B0] text-white hover:opacity-90 active:scale-95',
        secondary: 'bg-gradient-to-r from-[#F5A623] to-[#2979FF] text-white hover:opacity-90 active:scale-95',
        ghost: 'bg-transparent border-2 border-[#FF1D6C] text-[#FF1D6C] hover:bg-[#FF1D6C] hover:text-white',
    };
    const sizeStyles = {
        sm: 'px-[13px] py-[8px] text-[13px]',
        md: 'px-[21px] py-[13px] text-[16px]',
        lg: 'px-[34px] py-[21px] text-[21px]',
    };
    return (React.createElement("button", Object.assign({ className: clsx(baseStyles, variantStyles[variant], sizeStyles[size], fullWidth && 'w-full', className) }, props), children));
};

/**
 * BlackRoad Card Component
 * Part of BlackRoad Design System
 *
 * @license PROPRIETARY - BlackRoad OS, Inc.
 */
const Card = (_a) => {
    var { hover = false, gradient = false, className, children } = _a, props = __rest(_a, ["hover", "gradient", "className", "children"]);
    const baseStyles = 'rounded-[21px] p-[34px] backdrop-blur-[13px]';
    const backgroundStyles = gradient
        ? 'bg-gradient-to-br from-white/10 to-white/5'
        : 'bg-white/5';
    const hoverStyles = hover
        ? 'border-2 border-transparent hover:border-[#FF1D6C] hover:-translate-y-[8px] transition-all duration-300 cursor-pointer'
        : 'border-2 border-white/10';
    return (React.createElement("div", Object.assign({ className: clsx(baseStyles, backgroundStyles, hoverStyles, className) }, props), children));
};

/**
 * BlackRoad Gradient Component
 * Implements Golden Ratio gradients from BlackRoad Design System
 *
 * @license PROPRIETARY - BlackRoad OS, Inc.
 */
const Gradient = (_a) => {
    var { variant = 'primary', angle = 135, asText = false, className, children } = _a, props = __rest(_a, ["variant", "angle", "asText", "className", "children"]);
    const gradients = {
        // Golden Ratio color stops: 38.2% and 61.8%
        primary: `linear-gradient(${angle}deg, #FF1D6C 38.2%, #F5A623 61.8%)`,
        secondary: `linear-gradient(${angle}deg, #9C27B0 38.2%, #2979FF 61.8%)`,
        tertiary: `linear-gradient(${angle}deg, #F5A623 38.2%, #2979FF 61.8%)`,
    };
    if (asText) {
        return (React.createElement("span", Object.assign({ className: clsx('bg-clip-text text-transparent', className), style: {
                backgroundImage: gradients[variant],
            } }, props), children));
    }
    return (React.createElement("div", Object.assign({ className: clsx(className), style: {
            backgroundImage: gradients[variant],
        } }, props), children));
};

export { Button, Card, Gradient };
//# sourceMappingURL=index.esm.js.map
