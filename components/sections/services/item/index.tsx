import React, { FC } from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import { Typography } from '@components/typography'

export type ItemType = {
  subtitle: string
  title: string
  text: string
}
export type Props = ItemType

export const Item: FC<Props> = ({ subtitle, title, text }) => {
  return (
    <article className={s.service}>
      <div className={s.serviceHeader}>
        <span className={s.serviceNumber}>01</span>
        <div className={s.serviceTitle}>
          <Typography
            type={{
              name: 'heading',
              size: 'sm',
            }}
            as="h3"
          >
            Custom Furniture
          </Typography>
        </div>
      </div>
      <div className={s.serviceBody}>
        <Typography
          type={{
            name: 'paragraph',
            size: 'lg',
          }}
          as="p"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare,
        </Typography>
      </div>
    </article>
  )
}
