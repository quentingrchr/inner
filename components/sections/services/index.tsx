import React, { FC, ReactNode } from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import { Button, SectionSubtitle, SectionTitle } from '@components'
import { Item, ItemType } from './item'

export type Props = {
  title: ReactNode
  items: ItemType[]
  button: ReactNode
}

export const Services: FC<Props> = ({ items, title, button }) => {
  return (
    <section className={s.container}>
      <div className={s.header}>
        <div className={s.headerLeft}>
          <SectionSubtitle text="Service" />
          <SectionTitle>{title}</SectionTitle>
        </div>
        <div className={s.headerRight}>{button}</div>
      </div>
      {items.length > 0 ? (
        <ul className={s.list}>
          {items.map((item, index) => (
            <li className={s.itemWrapper} key={index}>
              <Item {...item} />
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  )
}
