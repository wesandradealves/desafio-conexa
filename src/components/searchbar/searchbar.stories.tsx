import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import SearchBar from './searchbar';

const meta: Meta<typeof SearchBar> = {
  component: SearchBar,
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Basic: Story = {args: {}};
