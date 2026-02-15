import type { Meta, StoryObj } from '@storybook/react';
import { AgentCard } from './AgentCard';

const meta: Meta<typeof AgentCard> = {
  title: 'Components/AgentCard',
  component: AgentCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AgentCard>;

export const Online: Story = {
  args: {
    name: 'Roadie',
    role: 'AI Infrastructure Agent',
    status: 'online',
    tasks: 42,
    uptime: '99.9%',
  },
};

export const Busy: Story = {
  args: {
    name: 'Athena',
    role: 'Code Review Agent',
    status: 'busy',
    tasks: 15,
    uptime: '98.5%',
  },
};

export const Offline: Story = {
  args: {
    name: 'Guardian',
    role: 'Security Agent',
    status: 'offline',
  },
};

export const AgentGrid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', maxWidth: '600px' }}>
      <AgentCard name="Roadie" role="Infrastructure" status="online" tasks={42} uptime="99.9%" />
      <AgentCard name="Athena" role="Code Review" status="busy" tasks={15} />
      <AgentCard name="Guardian" role="Security" status="online" tasks={8} uptime="100%" />
      <AgentCard name="Radius" role="Analytics" status="away" tasks={23} />
    </div>
  ),
};
