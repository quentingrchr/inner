/* story for title component */
import { FC } from 'react'
import { Story, ComponentMeta } from '@storybook/react'
import { Button, Props } from './index'
export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: Story<Props> = (args: Props) => (
  <Button
    {...args}
    onClick={() => {
      alert('Button clicked')
    }}
  >
    Button Text
  </Button>
)

export const PrimaryDark = Template.bind({} as Props)
PrimaryDark.args = {
  variant: 'primary',
  color: 'dark',
}

export const PrimaryLight = Template.bind({} as Props)
PrimaryLight.args = {
  variant: 'primary',
  color: 'light',
}

export const SecondaryDark = Template.bind({} as Props)
SecondaryDark.args = {
  variant: 'secondary',
  color: 'dark',
}

export const SecondaryLight = Template.bind({} as Props)
SecondaryLight.args = {
  variant: 'secondary',
  color: 'light',
}
