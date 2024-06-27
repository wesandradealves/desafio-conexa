import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import Rating from './rating';

const meta: Meta<typeof Rating> = {
  component: Rating,
};

export default meta;

type Story = StoryObj<typeof Rating>;

export const Basic: Story = {args: {}};
