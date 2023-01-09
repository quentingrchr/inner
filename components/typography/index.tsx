import React, { ElementType, HTMLAttributes, FC, CSSProperties } from 'react'
import s from './styles.module.scss'
import cn from 'classnames'

export interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  as?: TypographyTag
  type?: TypographyType
  style?: CSSProperties
}

export const TypographyName = [
  'heading',
  'paragraph',
  'link',
  'quote',
  'button',
  'section-subtitle',
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

type TypographyTypeSectionSubtitle = {
  name: 'section-subtitle'
}

type TypographyTypeQuote = {
  name: 'quote'
}

type TypographyType =
  | TypographyTypeHeading
  | TypographyTypeParagraph
  | TypographyTypeLink
  | TypographyTypeCaption
  | TypographyTypeButton
  | TypographyTypeSectionSubtitle
  | TypographyTypeQuote

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
  style,
}) => {
  if (hasSizeProperty(type)) {
    return (
      <Tag className={cn(s[`${type.name}-${type.size}`], s.base)} style={style}>
        {children}
      </Tag>
    )
  } else {
    return (
      <Tag className={cn(s[type.name], s.base)} style={style}>
        {children}
      </Tag>
    )
  }
}
