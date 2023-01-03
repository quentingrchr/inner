import React, { FC } from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import { Typography } from '@components'
import { TypographyName } from '../typography'

export type Props = {
  text: string
}

export const SectionTitle: FC<Props> = ({ text }) => {
  return (
    <div className={s.container}>
      <Typography type={{ name: TypographyName.SECTION_TITLE }} as="h2">
        {text}
      </Typography>
    </div>
  )
}
