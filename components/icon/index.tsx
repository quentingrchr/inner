import React, { FC } from 'react'
import s from './styles.module.scss'
import * as Icons from './icons'

export type IconType = 'logo' | 'cart'
export type Size = '2xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
type Sizes = {
  [key in Size]: number
}
export type Props = {
  type: IconType
  size?: Size | number
}

const sizes: Sizes = {
  '2xs': 16,
  'sm': 24,
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
    default:
      throw new Error(`Icon type ${type} is not supported`)
  }
}

export const Icon: FC<Props> = ({ type, size = 'md' }) => {
  const computedSize = typeof size === 'number' ? size : sizes[size]
  return (
    <div
      style={{
        width: computedSize,
      }}
      className={s.container}
    >
      {getIcon(type)}
    </div>
  )
}
