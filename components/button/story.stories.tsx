/* story for title component */
import { FC } from 'react'
import { Story, ComponentMeta } from '@storybook/react'
import { Button, Props } from './index'
export default {
  title: 'Molecules/Button',
  component: Button,
  argTypes: {
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    onClick: {
      action: 'onClick action',
    },
    type: {
      defaultValue: 'button',
    },
    to: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof Button>

const Template: Story<Props> = (args: Props) => (
  <Button {...args}>Button Text</Button>
)

export const PrimaryDark = Template.bind({} as Props)
PrimaryDark.args = {
  variant: 'primary',
  color: 'dark',
}
PrimaryDark.parameters = {
  layout: 'centered',
}

export const PrimaryLight = Template.bind({} as Props)
PrimaryLight.args = {
  variant: 'primary',
  color: 'light',
}
PrimaryLight.parameters = {
  layout: 'centered',
}

export const SecondaryDark = Template.bind({} as Props)
SecondaryDark.args = {
  variant: 'secondary',
  color: 'dark',
}
SecondaryDark.parameters = {
  layout: 'centered',
}

export const SecondaryLight = Template.bind({} as Props)
SecondaryLight.args = {
  variant: 'secondary',
  color: 'light',
}
SecondaryLight.parameters = {
  layout: 'centered',
}
