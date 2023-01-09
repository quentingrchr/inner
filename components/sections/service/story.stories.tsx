/* story for title component */
import { FC } from 'react'
import { Story, ComponentMeta } from '@storybook/react'
import { Service, Props } from './index'
export default {
  title: 'Components/ServiceSection',
  component: Service,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Service>

const Template: Story<Props> = (args: Props) => <Service {...args} />

export const Default = Template.bind({})
