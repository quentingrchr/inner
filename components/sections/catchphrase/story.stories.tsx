/* story for title component */
import { FC } from 'react'
import { Story, ComponentMeta } from '@storybook/react'
import { Catchphrase, Props } from './index'
export default {
  title: 'Organisms/SectionCatchphrase',
  component: Catchphrase,
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
      defaultValue: 'Presentation',
    },
    children: {
      control: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Catchphrase>

const Template: Story<Props> = (args: Props) => (
  <Catchphrase {...args}>
    A <em>creative template</em> highly suitable for interior design firms and
    those who need an easy, <em>attractive and effective</em> way to share their
    work with a delightful experience.
  </Catchphrase>
)

export const Default = Template.bind({
  title: 'Presentation',
})
