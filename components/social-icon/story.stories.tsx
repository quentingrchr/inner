/* story for title component */
import { FC } from 'react'
import { Story, ComponentMeta } from '@storybook/react'
import { SocialIcon, Props } from './index'
export default {
  title: 'Components/CartIcon',
  component: SocialIcon,
  
} as ComponentMeta<typeof SocialIcon>

const Template: Story<Props> = (args: Props) => <SocialIcon {...args} />

export const Default = Template.bind({})

