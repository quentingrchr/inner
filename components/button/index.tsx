import React, { FC, ReactNode } from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import { Typography } from '@components'
import { TypographyName } from '@components/typography'

export type Props = {
  children?: ReactNode
  onClick?: () => void
  to?: string
  variant: 'primary' | 'secondary'
  color: 'light' | 'dark'
  type?: 'button' | 'submit' | 'reset'
}

function isExternal(url: string) {
  return url.startsWith('http') || url.startsWith('www')
}

const Content = ({ children }: { children: ReactNode }) => {
  return (
    <div className={s.text}>
      <Typography
        type={{
          name: TypographyName.BUTTON,
        }}
        as="span"
      >
        {children}
      </Typography>
    </div>
  )
}

export const Button: FC<Props> = ({
  onClick,
  children,
  to,
  type = 'button',
  color = 'dark',
  variant = 'primary',
}) => {
  if (onClick !== undefined) {
    return (
      <button
        onClick={onClick}
        className={cn(s.container, s[variant], s[color])}
        type={type}
      >
        <Content>{children}</Content>
      </button>
    )
  } else if (to !== undefined) {
    if (isExternal(to)) {
      return (
        <a href={to} className={cn(s.container, s[variant], s[color])}>
          <Content>{children}</Content>
        </a>
      )
    } else {
      return (
        <Link href={to} className={cn(s.container, s[variant], s[color])}>
          <Content>{children}</Content>
        </Link>
      )
    }
  } else {
    throw new Error('Button must have either onClick or to prop')
  }
}
