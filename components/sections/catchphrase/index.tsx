import React, { FC, useRef } from 'react'
import s from './styles.module.scss'
import { motion, useInView } from 'framer-motion'
import { SectionTitle, Typography } from '@components'

export type Props = {
  title: string
  children: React.ReactNode
}

export const Catchphrase: FC<Props> = ({ title, children }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { margin: '-50%' })
  return (
    <motion.div className={s.container} ref={ref}>
      <div className={s.title}>
        <SectionTitle text={title} />
      </div>
      <motion.div
        className={s.content}
        variants={{
          visible: {
            opacity: 1,
            transform: 'translateY(0%)',
            transition: {
              duration: 0.6,
            },
          },
          hidden: {
            opacity: 0,
            transform: 'translateY(30%)',
          },
        }}
        animate={isInView ? 'visible' : 'hidden'}
      >
        <Typography
          as="h1"
          type={{
            name: 'heading',
            size: 'xxl',
          }}
          className={s.catchphrase}
        >
          {children}
        </Typography>
      </motion.div>
    </motion.div>
  )
}
