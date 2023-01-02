import Link from 'next/link'
import React, { FC } from 'react'
import s from './styles.module.scss'
import { motion } from 'framer-motion'

type Props = {
  number: number
  label: string
  to: string
}

export const Entry: FC<Props> = ({ number, label, to }) => {
  const computeNumber = (number: number): string => {
    const string = new Intl.NumberFormat('en-US', {
      minimumIntegerDigits: 2,
    }).format(number)
    return string
  }
  return (
    <motion.li
      className={s.entry}
      variants={{
        close: {
          scaleY: 0,
          transition: {
            duration: 0.2,
          },
        },
        open: {
          scaleY: 1,
          transition: {
            duration: 0.6,
          },
        },
      }}
    >
      <Link href={to}>
        <a className={s.link} title={`Navigate to our ${label} page`}>
          <span className={s.label}>{label}</span>
          <span className={s.number}>{computeNumber(number)}</span>
        </a>
      </Link>
    </motion.li>
  )
}
