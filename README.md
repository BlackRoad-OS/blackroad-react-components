# BlackRoad React Component Library

**Official React component library implementing the BlackRoad Design System**

## Features

✅ **Complete Design System**
- Golden Ratio spacing (φ = 1.618)
- Official brand colors (Hot Pink, Amber, Violet, Electric Blue)
- Gradient components with Golden Ratio color stops
- Responsive & accessible

✅ **Components**
- `<Button>` - Primary, secondary, ghost variants
- `<Card>` - Glassmorphic cards with hover effects
- `<Gradient>` - Golden Ratio gradients
- `<Input>` - Form inputs with validation
- `<Modal>` - Dialogs and modals
- `<Table>` - Data tables
- And more...

✅ **TypeScript Support**
- Full type definitions
- IntelliSense support
- Type-safe props

✅ **Storybook**
- Interactive component playground
- Visual documentation
- Usage examples

## Installation

```bash
npm install @blackroad/react-components
```

## Usage

```tsx
import { Button, Card, Gradient } from '@blackroad/react-components';

function App() {
  return (
    <div style={{ background: '#000', minHeight: '100vh', padding: '34px' }}>
      <Card hover gradient>
        <Gradient asText variant="primary">
          <h1 style={{ fontSize: '55px', fontWeight: 700 }}>
            BlackRoad Enterprise
          </h1>
        </Gradient>

        <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: '21px' }}>
          Built with the BlackRoad Design System
        </p>

        <Button variant="primary" size="lg" style={{ marginTop: '34px' }}>
          Get Started
        </Button>
      </Card>
    </div>
  );
}
```

## Components

### Button

```tsx
<Button variant="primary" size="md">
  Click me
</Button>

<Button variant="secondary" size="lg" fullWidth>
  Full Width Button
</Button>

<Button variant="ghost" size="sm">
  Ghost Button
</Button>
```

**Props:**
- `variant`: `'primary' | 'secondary' | 'ghost'` (default: `'primary'`)
- `size`: `'sm' | 'md' | 'lg'` (default: `'md'`)
- `fullWidth`: `boolean` (default: `false`)

### Card

```tsx
<Card hover gradient>
  <h2>Card Title</h2>
  <p>Card content goes here</p>
</Card>
```

**Props:**
- `hover`: `boolean` - Enable hover effects (default: `false`)
- `gradient`: `boolean` - Use gradient background (default: `false`)

### Gradient

```tsx
// As text gradient
<Gradient asText variant="primary">
  <h1>Gradient Text</h1>
</Gradient>

// As background gradient
<Gradient variant="secondary" angle={90}>
  <div>Content with gradient background</div>
</Gradient>
```

**Props:**
- `variant`: `'primary' | 'secondary' | 'tertiary'` (default: `'primary'`)
- `angle`: `number` - Gradient angle in degrees (default: `135`)
- `asText`: `boolean` - Apply gradient to text (default: `false`)

## Design System

### Colors

```js
const colors = {
  hotPink: '#FF1D6C',
  amber: '#F5A623',
  electricBlue: '#2979FF',
  violet: '#9C27B0',
  black: '#000000',
  white: '#FFFFFF',
};
```

### Spacing (Golden Ratio)

```js
const spacing = {
  xs: '8px',   // Base
  sm: '13px',  // Base × φ^0
  md: '21px',  // Base × φ^1
  lg: '34px',  // Base × φ^2
  xl: '55px',  // Base × φ^3
  '2xl': '89px',  // Base × φ^4
  '3xl': '144px', // Base × φ^5
};
```

### Typography

- **Font Family:** SF Pro Display (fallback: system fonts)
- **Line Height:** 1.618 (Golden Ratio)
- **Font Sizes:** 13px, 16px, 21px, 34px, 55px, 89px

### Gradients

All gradients use Golden Ratio color stops:
- First color at 38.2%
- Second color at 61.8%

Default angle: 135deg

## Development

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Build library
npm run build
```

## Storybook

View all components interactively:

```bash
npm run storybook
```

Then visit: http://localhost:6006

## License

**PROPRIETARY** - BlackRoad OS, Inc.

This is proprietary software. Unauthorized copying, distribution, or use is strictly prohibited.

---

**🖤 Built with BlackRoad - Beautiful enterprise design 🛣️**
