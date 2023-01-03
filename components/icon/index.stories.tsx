/* story for title component */
import { FC } from 'react'
import { Story, ComponentMeta } from '@storybook/react'
import { Icon, Props, IconType, Size } from './index'

const sizeOptions: Size[] = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl']
export default {
  title: 'Atoms/BaseIcon',
  component: Icon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: sizeOptions,
      },
    },
  },
} as ComponentMeta<typeof Icon>

const Template: Story<Props> = (args: Props) => <Icon {...args} />

export const SingleIcon = Template.bind({})
SingleIcon.args = {
  type: 'logo',
  size: 'md',
}
SingleIcon.parameters = {
  layout: 'centered',
}

const icons: IconType[] = ['logo', 'cart', 'facebook', 'instagram', 'twitter']
export const AllIcons: Story<Props> = (args: Props) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'min-content min-content min-content min-content',
      gridGap: '1rem',
      margin: '0 auto',
    }}
  >
    {icons.map((icon) => (
      <div
        key={icon}
        style={{
          border: '1px solid #ccc',
          padding: '1rem',
          display: 'flex',
          width: 'fit-content',
        }}
      >
        <Icon type={icon} size={args.size} color={args.color} />
      </div>
    ))}
  </div>
)

AllIcons.args = {
  size: 'md',
  color: 'primary-700',
}

AllIcons.argTypes = {
  /* disable all controls for this story */
  type: {
    table: {
      disable: true,
    },
  },
}

AllIcons.parameters = {
  layout: 'centered',
}
