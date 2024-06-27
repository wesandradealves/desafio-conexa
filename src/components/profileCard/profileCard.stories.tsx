import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import ProfileCard from './profileCard';

const meta: Meta<typeof ProfileCard> = {
  component: ProfileCard,
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Basic: Story = {args: {}};
