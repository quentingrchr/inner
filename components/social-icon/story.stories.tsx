/* story for title component */
import { FC } from 'react'
import { Story, ComponentMeta } from '@storybook/react'
import { SocialIcon, Props } from './index'
export default {
  title: 'Molecules/SocialIcon',
  component: SocialIcon,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['facebook', 'twitter', 'instagram', 'youtube'],
      },
      defaultValue: 'facebook',
    },
  },
} as ComponentMeta<typeof SocialIcon>

const Template: Story<Props> = (args: Props) => <SocialIcon {...args} />

export const Default = Template.bind({})
Default.parameters = {
  layout: 'centered',
}
