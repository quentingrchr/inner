import React, { FC } from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import { Typography } from '@components'

export type Props = {
  text: string
}

export const SectionSubtitle: FC<Props> = ({ text }) => {
  return (
    <div className={s.container}>
      <Typography type={{ name: 'section-subtitle' }} as="h2">
        {text}
      </Typography>
    </div>
  )
}
