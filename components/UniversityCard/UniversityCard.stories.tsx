import type { Meta, StoryObj } from '@storybook/react';

import UniversityCard from './UniversityCard';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/UniversityCard',
  component: UniversityCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: 500, minWidth: 300 }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof UniversityCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    name: 'Yeditepe Universitesi',
    city: 'Izmir',
    country: 'Amerika',
    type: 'Public',
    programCount: 3,
    href: '/',
    onPress: () => { },
  },
};
