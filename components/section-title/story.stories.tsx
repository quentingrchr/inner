/* story for title component */
import { FC } from 'react'
import { Story, ComponentMeta } from '@storybook/react'
import { SectionTitle, Props } from './index'
export default {
  title: 'Molecules/SectionTitle',
  component: SectionTitle,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof SectionTitle>

const Template: Story<Props> = (args: Props) => <SectionTitle {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Section Title',
}
