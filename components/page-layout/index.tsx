import React, { FC } from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import { Navigation } from '..'

export type Props = {
  children: React.ReactNode
}

export const PageLayout: FC<Props> = ({ children }) => {
  return (
    <div className={s.pageLayout}>
      <Navigation />
      <main>{children}</main>
    </div>
  )
}
