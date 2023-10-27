import type { Meta, StoryObj } from '@storybook/react';
import { Button, Input } from "@nextui-org/react";

import Hero from './Hero';
import FlexBox from '../FlexBox/FlexBox';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    title: 'Lorem Ipsum',
    description: 'The smart alternative to applying direct for a degree abroad and the easy way to find programs that match your eligibility and aspirations',
    photoUrl: 'hero',
    children: (
      <FlexBox className='items-center gap-x-3 bg-zinc-300 p-5'>
        <Input size='sm' label='City' fullWidth={false} />
        <Input size='sm' label='University' fullWidth={false} />
        <Button size='lg' radius='sm' className="bg-primary-800 text-white">Search</Button>
      </FlexBox>
    )
  },
};
