/* story for title component */
import { FC } from 'react'
import { Story, ComponentMeta } from '@storybook/react'
import { Typography, Props, TypographyName } from './index'
export default {
  title: 'Components/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>

const Template: Story<Props> = (args: Props) => <Typography {...args} />

export const HeadingXl = Template.bind({})
HeadingXl.args = {
  type: { name: TypographyName.HEADING, size: 'xl' },
  children: 'Heading XL',
  as: 'h1',
}

export const HeadingLg = Template.bind({})
HeadingLg.args = {
  type: { name: TypographyName.HEADING, size: 'lg' },
  children: 'Heading LG',
  as: 'h2',
}

export const HeadingMd = Template.bind({})
HeadingMd.args = {
  type: { name: TypographyName.HEADING, size: 'md' },
  children: 'Heading MD',
  as: 'h3',
}

export const HeadingSm = Template.bind({})
HeadingSm.args = {
  type: { name: TypographyName.HEADING, size: 'sm' },
  children: 'Heading SM',
  as: 'h4',
}

export const HeadingXs = Template.bind({})
HeadingXs.args = {
  type: { name: TypographyName.HEADING, size: 'xs' },
  children: 'Heading XS',
  as: 'h5',
}

export const ParagraphXl = Template.bind({})
ParagraphXl.args = {
  type: { name: TypographyName.PARAGRAPH, size: 'xl' },
  children: 'Paragraph XL',
  as: 'p',
}

export const ParagraphLg = Template.bind({})
ParagraphLg.args = {
  type: { name: TypographyName.PARAGRAPH, size: 'lg' },
  children: 'Paragraph LG',
  as: 'p',
}

export const ParagraphMd = Template.bind({})
ParagraphMd.args = {
  type: { name: TypographyName.PARAGRAPH, size: 'md' },
  children: 'Paragraph MD',
  as: 'p',
}

export const ParagraphSm = Template.bind({})
ParagraphSm.args = {
  type: { name: TypographyName.PARAGRAPH, size: 'sm' },
  children: 'Paragraph SM',
  as: 'p',
}

export const ParagraphXs = Template.bind({})
ParagraphXs.args = {
  type: { name: TypographyName.PARAGRAPH, size: 'xs' },
  children: 'Paragraph XS',
  as: 'p',
}

export const Link = Template.bind({})
Link.args = {
  type: { name: TypographyName.LINK },
  children: 'Link',
  as: 'span',
}

export const Quote = Template.bind({})
Quote.args = {
  type: { name: TypographyName.QUOTE },
  children: 'Quote',
  as: 'span',
}

export const Button = Template.bind({})
Button.args = {
  type: { name: TypographyName.BUTTON },
  children: 'Button',
  as: 'span',
}
