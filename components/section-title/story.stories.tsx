/* story for title component */
import { FC } from 'react'
import { Story, ComponentMeta } from '@storybook/react'
import { SectionTitle, Props } from './index'
export default {
  title: 'Components/SectionTitle',
  component: SectionTitle,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof SectionTitle>

const Template: Story<Props> = (args: Props) => (
  <SectionTitle>{args.children}</SectionTitle>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Section Title',
}
