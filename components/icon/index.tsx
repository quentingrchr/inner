import React, { FC } from 'react'
import s from './styles.module.scss'
import * as Icons from './icons'
import iconSet from '@assets/icomoon/selection.json'
import IcomoonReact, { iconList } from 'icomoon-react'

export type IconType =
  | 'logo'
  | 'cart'
  | 'instagram'
  | 'facebook'
  | 'twitter'
  | 'youtube'

export type IconColor =
  | 'primary-700'
  | 'primary-600'
  | 'primary-500'
  | 'primary-400'
  | 'primary-300'
  | 'primary-200'

export type Size = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
type Sizes = {
  [key in Size]: number
}
export type Props = {
  type: IconType
  size?: Size | number
  color?: IconColor
  style?: React.CSSProperties
}

const colors: { [key in IconColor]: string } = {
  'primary-700': '#261b11',
  'primary-600': '#4c4037',
  'primary-500': '#957f72',
  'primary-400': '#b6a497',
  'primary-300': '#e5d9cf',
  'primary-200': '#f9f1ec',
}

const sizes: Sizes = {
  '2xs': 16,
  'sm': 20,
  'xs': 24,
  'md': 30,
  'lg': 36,
  'xl': 40,
  '2xl': 48,
}

function getIcon(type: IconType): JSX.Element {
  switch (type) {
    case 'logo':
      return <Icons.Logo />
    case 'cart':
      return <Icons.Cart />
    case 'instagram':
      return <Icons.Instagram />
    case 'facebook':
      return <Icons.Facebook />
    case 'twitter':
      return <Icons.Twitter />
    case 'youtube':
      return <Icons.Youtube />
    default:
      throw new Error(`Icon type ${type} is not supported`)
  }
}

export const Icon: FC<Props> = ({
  type,
  size,
  color = 'primary-700',
  style,
}) => {
  let computedSize
  if (typeof size === 'number') {
    computedSize = size
  } else if (typeof size === 'string') {
    computedSize = sizes[size]
  } else {
    computedSize = 'auto'
  }

  return (
    <div className={s.container}>
      <IcomoonReact
        iconSet={iconSet}
        color={colors[color]}
        size={computedSize}
        icon={type}
        style={style}
      />
    </div>
  )
}
