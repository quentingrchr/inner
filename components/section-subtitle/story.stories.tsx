/* story for title component */
import { FC } from 'react'
import { Story, ComponentMeta } from '@storybook/react'
import { SectionSubtitle, Props } from './index'
export default {
  title: 'Molecules/SectionTitle',
  component: SectionSubtitle,
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
} as ComponentMeta<typeof SectionSubtitle>

const Template: Story<Props> = (args: Props) => <SectionSubtitle {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Section Subtitle',
}
