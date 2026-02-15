# @blackroad/react-components

BlackRoad OS React Component Library - Golden Ratio Design System

## Installation

```bash
npm install @blackroad/react-components
# or
yarn add @blackroad/react-components
# or
pnpm add @blackroad/react-components
```

## Usage

```tsx
import { Button, Card, AgentCard, GradientText, StatusPill } from '@blackroad/react-components';

function App() {
  return (
    <Card variant="glass" padding="lg">
      <GradientText as="h1" variant="brand">
        BlackRoad Dashboard
      </GradientText>

      <AgentCard
        name="Roadie"
        role="AI Infrastructure Agent"
        status="online"
        tasks={42}
        uptime="99.9%"
      />

      <Button variant="primary" gradient>
        Deploy Agent
      </Button>
    </Card>
  );
}
```

## Components

| Component | Description |
|-----------|-------------|
| `Button` | Primary, secondary, outline, and ghost variants with gradient support |
| `Card` | Container with default, elevated, outlined, and glass variants |
| `Badge` | Status badges with semantic colors |
| `StatusPill` | Online/offline/busy/away status indicators with pulse animation |
| `GradientText` | Text with BlackRoad brand gradients |
| `AgentCard` | AI agent display card with status and stats |
| `Input` | Text input with label, error, and icon support |

## Theme

Access design tokens directly:

```tsx
import { colors, gradients, spacing, shadows } from '@blackroad/react-components';

const styles = {
  background: colors.hotPink,
  padding: spacing.md,
  boxShadow: shadows.glow,
};
```

### Color Palette

- **Hot Pink**: `#FF1D6C` - Primary brand accent
- **Amber**: `#F5A623` - Secondary accent
- **Electric Blue**: `#2979FF` - Info color
- **Violet**: `#9C27B0` - Tertiary accent

### Golden Ratio Spacing

Based on φ = 1.618:
- `xs`: 8px
- `sm`: 13px
- `md`: 21px
- `lg`: 34px
- `xl`: 55px
- `2xl`: 89px
- `3xl`: 144px

## Storybook

View component documentation at: https://blackroad-storybook.pages.dev

## License

MIT © BlackRoad OS, Inc.
