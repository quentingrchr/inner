/* story for title component */
import { FC } from 'react'
import { Story, ComponentMeta } from '@storybook/react'
import { Typography, Props } from './index'
export default {
  title: 'Atoms/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Typography>

const Template: Story<Props> = (args: Props) => <Typography {...args} />

export const HeadingXl = Template.bind({})
HeadingXl.args = {
  type: { name: 'heading', size: 'xl' },
  children: 'Heading XL',
  as: 'h1',
}

export const HeadingLg = Template.bind({})
HeadingLg.args = {
  type: { name: 'heading', size: 'lg' },
  children: 'Heading LG',
  as: 'h2',
}

export const HeadingMd = Template.bind({})
HeadingMd.args = {
  type: { name: 'heading', size: 'md' },
  children: 'Heading MD',
  as: 'h3',
}

export const HeadingSm = Template.bind({})
HeadingSm.args = {
  type: { name: 'heading', size: 'sm' },
  children: 'Heading SM',
  as: 'h4',
}

export const HeadingXs = Template.bind({})
HeadingXs.args = {
  type: { name: 'heading', size: 'xs' },
  children: 'Heading XS',
  as: 'h5',
}

export const ParagraphXl = Template.bind({})
ParagraphXl.args = {
  type: { name: 'paragraph', size: 'xl' },
  children: 'Paragraph XL',
  as: 'p',
}

export const ParagraphLg = Template.bind({})
ParagraphLg.args = {
  type: { name: 'paragraph', size: 'lg' },
  children: 'Paragraph LG',
  as: 'p',
}

export const ParagraphMd = Template.bind({})
ParagraphMd.args = {
  type: { name: 'paragraph', size: 'md' },
  children: 'Paragraph MD',
  as: 'p',
}

export const ParagraphSm = Template.bind({})
ParagraphSm.args = {
  type: { name: 'paragraph', size: 'sm' },
  children: 'Paragraph SM',
  as: 'p',
}

export const ParagraphXs = Template.bind({})
ParagraphXs.args = {
  type: { name: 'paragraph', size: 'xs' },
  children: 'Paragraph XS',
  as: 'p',
}

export const Link = Template.bind({})
Link.args = {
  type: { name: 'link' },
  children: 'Link',
  as: 'span',
}

export const Quote = Template.bind({})
Quote.args = {
  type: { name: 'quote' },
  children: 'Quote',
  as: 'span',
}

export const Button = Template.bind({})
Button.args = {
  type: { name: 'button' },
  children: 'Button',
  as: 'span',
}

export const SectionTitle = Template.bind({})
SectionTitle.args = {
  type: { name: 'section-title' },
  children: 'Section Title',
  as: 'h2',
}
