import React, { FC } from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import { Icon } from '@components'

export type Props = {
  color?: 'light' | 'dark'
}

export const LogoIcon: FC<Props> = ({ color = 'dark' }) => {
  return (
    <Icon
      type="logo"
      style={{
        width: 90,
        height: 30,
      }}
      color={color === 'dark' ? 'primary-700' : 'primary-200'}
    />
  )
}
