import React, { ElementType, HTMLAttributes, FC } from 'react'
import s from './styles.module.scss'
import cn from 'classnames'

export interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  as?: TypographyTag
  type?: TypographyType
}

export enum TypographyName {
  HEADING = 'heading',
  PARAGRAPH = 'paragraph',
  LINK = 'link',
  QUOTE = 'quote',
  BUTTON = 'button',
  SECTION_TITLE = 'section-title',
}

type TypographyTag =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'div'
type TypographySize = 'xl' | 'lg' | 'md' | 'sm' | 'xs'
type TypographySizeExtended = TypographySize | 'xxl' | 'xxs'

type TypographyTypeHeading = {
  name: TypographyName.HEADING
  size: TypographySizeExtended
}

type TypographyTypeParagraph = {
  name: TypographyName.PARAGRAPH
  size: TypographySize
}

type TypographyTypeLink = {
  name: TypographyName.LINK
}

type TypographyTypeCaption = {
  name: TypographyName.QUOTE
}

type TypographyTypeButton = {
  name: TypographyName.BUTTON
}

type TypographyTypeSectionTitle = {
  name: TypographyName.SECTION_TITLE
}

type TypographyType =
  | TypographyTypeHeading
  | TypographyTypeParagraph
  | TypographyTypeLink
  | TypographyTypeCaption
  | TypographyTypeButton
  | TypographyTypeSectionTitle

function hasSizeProperty(
  type: TypographyType
): type is TypographyTypeHeading | TypographyTypeParagraph {
  return (
    type.name === TypographyName.HEADING ||
    type.name === TypographyName.PARAGRAPH
  )
}

export const Typography: FC<Props> = ({
  type = {
    name: TypographyName.PARAGRAPH,
    size: 'md',
  },
  as: Tag = 'p',
  children,
}) => {
  if (hasSizeProperty(type)) {
    return <Tag className={cn(s[`${type.name}-${type.size}`])}>{children}</Tag>
  } else {
    return <Tag className={cn(s[type.name])}>{children}</Tag>
  }
}
