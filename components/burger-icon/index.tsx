import React, { FC, useState } from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import { motion } from 'framer-motion'

export type Props = {
  isOpen?: boolean
  onClick?: () => void
  color?: 'light' | 'dark'
}

const variantLine1 = {
  closed: {
    transform: 'rotate(0deg) translate3d(0, -0.5rem, 0)',
  },
  open: {
    transform: 'rotate(-45deg) translate3d(0, 0rem, 0)',
  },
}

const variantLine2 = {
  closed: {
    transform: 'rotate(0deg) translate3d(0, 0.5rem, 0)',
    width: '75%',
  },
  open: {
    transform: 'rotate(45deg) translate3d(0, 0rem, 0)',
    width: '100%',
  },
}

export const BurgerIcon: FC<Props> = ({
  isOpen = false,
  onClick = () => {},
  color = 'dark',
}) => {
  return (
    <motion.div
      className={cn(s.container, s[color], { [s.open]: isOpen })}
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      exit="closed"
      onClick={onClick}
    >
      <motion.span
        className={cn(s.line1)}
        variants={variantLine1}
      ></motion.span>
      <motion.span
        className={cn(s.line2)}
        variants={variantLine2}
      ></motion.span>
    </motion.div>
  )
}
