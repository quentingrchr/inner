import React, { FC } from 'react'
import s from './styles.module.scss'
import { motion } from 'framer-motion'
import { Button } from '@components'

export type Props = {
  animationDelay?: number
}

export const HeroLeft: FC<Props> = ({ animationDelay = 0 }) => {
  const titleVariants = {
    animate: {
      transition: {
        delayChildren: 0.5 + animationDelay,
        staggerChildren: 0.3,
      },
    },
  }
  const wordVariants = {
    initial: {
      scaleY: 0,
      y: 30,
    },
    animate: {
      scaleY: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const buttonsVariants = {
    animate: {
      opacity: 1,
      transition: {
        delay: 2.5 + animationDelay,
        duration: 0.2,
      },
    },
    initial: {
      opacity: 0,
    },
  }
  return (
    <div className={s.heroContent__left}>
      <motion.p className={s.heroContent__address} variants={buttonsVariants}>
        LOS ANGELES,CA
      </motion.p>
      <motion.h1 className={s.heroContent__title} variants={titleVariants}>
        <motion.div className={s.heroContent__word} variants={wordVariants}>
          Elegantly
        </motion.div>
        <motion.div className={s.heroContent__word} variants={wordVariants}>
          refined
        </motion.div>
        <motion.div className={s.heroContent__word} variants={wordVariants}>
          <motion.span
            animate={{
              width: '8vh',
              transition: {
                duration: 0.5,
                delay: animationDelay + 2.4,
              },
            }}
            initial={{
              width: 0,
            }}
            className={s.heroContent__line}
          ></motion.span>
          interior
        </motion.div>
        <motion.div className={s.heroContent__word} variants={wordVariants}>
          design
        </motion.div>
      </motion.h1>
      <motion.div className={s.heroContent__buttons} variants={buttonsVariants}>
        <Button variant="primary" color="dark" onClick={() => {}}>
          Get in touch
        </Button>
        <Button variant="primary" color="light" onClick={() => {}}>
          About us
        </Button>
      </motion.div>
    </div>
  )
}
