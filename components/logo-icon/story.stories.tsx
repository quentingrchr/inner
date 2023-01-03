/* story for title component */
import { FC } from 'react'
import { Story, ComponentMeta } from '@storybook/react'
import { LogoIcon, Props } from './index'
export default {
  title: 'Molecules/LogoIcon',
  component: LogoIcon,
  argTypes: {
    color: {
      options: ['light', 'dark'],
      control: {
        type: 'radio',
      },
      defaultValue: 'dark',
    },
  },
} as ComponentMeta<typeof LogoIcon>

const Template: Story<Props> = (args: Props) => <LogoIcon {...args} />

export const Default = Template.bind({})
Default.parameters = {
  layout: 'centered',
}
