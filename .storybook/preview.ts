import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'blackroad',
      values: [
        { name: 'blackroad', value: '#000000' },
        { name: 'dark', value: '#121212' },
        { name: 'light', value: '#FFFFFF' },
      ],
    },
  },
};

export default preview;
