/* story for title component */
import { FC } from 'react'
import { Story, ComponentMeta } from '@storybook/react'
import { BurgerIcon, Props } from './index'
export default {
  title: 'Molecules/BurgerIcon',
  component: BurgerIcon,
  argTypes: {
    isOpen: {
      control: 'boolean',
      defaultValue: false,
    },
    color: {
      options: ['light', 'dark'],
      control: {
        type: 'radio',
      },
      defaultValue: 'dark',
    },

    onClick: {
      action: 'onClick action',
    },
  },
} as ComponentMeta<typeof BurgerIcon>

const Template: Story<Props> = (args: Props) => <BurgerIcon {...args} />
export const Default = Template.bind({})
Default.parameters = {
  layout: 'centered',
}
