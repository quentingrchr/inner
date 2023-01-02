/* story for title component */
import { FC } from 'react'
import { Story, ComponentMeta } from '@storybook/react'
import { BurgerIcon, Props } from './index'
export default {
  title: 'Components/BurgerIcon',
  component: BurgerIcon,
  argTypes: {
    isOpen: {
      control: 'boolean',
    },
    onClick: {
      action: 'onClick action',
    },
  },
} as ComponentMeta<typeof BurgerIcon>

const Template: Story<Props> = (args: Props) => <BurgerIcon {...args} />
export const Default = Template.bind({})
