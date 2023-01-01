/* story for title component */
import { FC } from 'react'
import { Story, ComponentMeta } from '@storybook/react'
import { __component__(pascalCase), Props } from './index'
export default {
  title: 'Components/CartIcon',
  component: __component__(pascalCase),
  
} as ComponentMeta<typeof __component__(pascalCase)>

const Template: Story<Props> = (args: Props) => <__component__(pascalCase) {...args} />

export const Default = Template.bind({})

