import type { Meta, StoryObj } from '@storybook/react';

import { SqButton } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Boutons',
  component: SqButton,
  tags: ['autodocs'],
  argTypes: { onClick: { action: 'clicked' } },
} satisfies Meta<typeof SqButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Orange: Story = {
  args: {
    variant: 'orange',
    label: 'Button',
    onClick: () => alert("allo")
  },
};

export const Outline: Story = {
  args: {
    label: 'Button',
    variant: 'outline'
  },
};

export const LienOrange: Story = {
  args: {
    variant: "orange",
    label: "Se connecter",
    href: "/",
  },
};

export const LienOutline: Story = {
  args: {
    variant: "outline",
    label: "Se connecter",
    href: "/",
  },
};

