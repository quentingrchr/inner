import React, { FC } from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import { SectionSubtitle } from '@components'

export type Props = {}

export const Service: FC<Props> = (props) => {
  return (
    <div className={s.container}>
      <SectionSubtitle text="Service" />
    </div>
  )
}
