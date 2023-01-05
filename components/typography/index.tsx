import React, { ElementType, HTMLAttributes, FC } from 'react'
import s from './styles.module.scss'
import cn from 'classnames'

export interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  as?: TypographyTag
  type?: TypographyType
}

const TypographyName = [
  'heading',
  'paragraph',
  'link',
  'quote',
  'button',
  'section-title',
] as const

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
  name: 'heading'
  size: TypographySizeExtended
}

type TypographyTypeParagraph = {
  name: 'paragraph'
  size: TypographySize
}

type TypographyTypeLink = {
  name: 'link'
}

type TypographyTypeCaption = {
  name: 'caption'
}

type TypographyTypeButton = {
  name: 'button'
}

type TypographyTypeSectionTitle = {
  name: 'section-title'
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
  return type.name === 'heading' || type.name === 'paragraph'
}

export const Typography: FC<Props> = ({
  type = {
    name: 'paragraph',
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
