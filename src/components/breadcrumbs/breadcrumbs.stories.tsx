import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import AppBreadcrumbs from './breadcrumbs';

const meta: Meta<typeof AppBreadcrumbs> = {
  component: AppBreadcrumbs,
};

export default meta;

type Story = StoryObj<typeof AppBreadcrumbs>;

export const Basic: Story = {args: {}};
