/* story for title component */
import { FC } from 'react'
import { Story, ComponentMeta } from '@storybook/react'
import { CartIcon, Props } from './index'
export default {
  title: 'Molecules/CartIcon',
  component: CartIcon,
  argTypes: {
    color: {
      options: ['light', 'dark'],
      control: {
        type: 'radio',
      },
      defaultValue: 'dark',
    },
    quantity: {
      control: {
        type: 'range',
        min: 0,
        max: 150,
        step: 50,
      },
      defaultValue: 50,
    },
    onClick: {
      action: 'onClick action',
    },
  },
} as ComponentMeta<typeof CartIcon>

const Template: Story<Props> = (args: Props) => <CartIcon {...args} />

export const Default = Template.bind({})
Default.parameters = {
  layout: 'centered',
}
