import React, { FC, ReactNode, useRef } from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import { motion, useInView } from 'framer-motion'
import { Typography } from '@components'

export type Props = {
  children: ReactNode
}

export const SectionTitle: FC<Props> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { margin: '-30%', once: true })
  return (
    <motion.div
      className={s.container}
      ref={ref}
      variants={{
        visible: {
          scaleY: 1,
          transition: {
            duration: 0.6,
          },
        },
        hidden: {
          scaleY: 0,
        },
      }}
      animate={isInView ? 'visible' : 'hidden'}
    >
      <Typography type={{ name: 'heading', size: 'xxl' }}>
        {children}
      </Typography>
    </motion.div>
  )
}
