import React, { FC } from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import { Icon } from '@components'

export type Props = {
  type: 'facebook' | 'twitter' | 'instagram' | 'youtube'
  to: string
}

export const SocialIcon: FC<Props> = ({ type, to }) => {
  return (
    <a
      className={s.container}
      href={to}
      target="_blank"
      rel="noreferrer"
      title={`Link to ${type} page`}
      aria-label={`Link to ${type} page`}
    >
      <Icon type={type} size={20} color="primary-200" />
    </a>
  )
}
