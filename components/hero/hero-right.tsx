import React, { FC } from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { useScroll, useTransform, useSpring } from 'framer-motion'

type Props = {
  animationDelay?: number
}

export const HeroRight: FC<Props> = ({ animationDelay = 0 }) => {
  const { scrollYProgress } = useScroll()
  const y1Range = useTransform(scrollYProgress, [0, 0.5], [70, 170])
  const y1 = useSpring(y1Range, { stiffness: 400, damping: 90 })
  const y2Range = useTransform(scrollYProgress, [0, 0.5], [70, 130])
  const y2 = useSpring(y2Range, { stiffness: 400, damping: 90 })

  const imgVariant = {
    initial: {
      clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
      scale: 1.2,
    },
    animate: {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      scale: 1,
      transition: {
        ease: 'easeInOut',
        clipPath: {
          duration: 1,
          delay: animationDelay,
        },
        scale: {
          duration: 1.6,
          delay: animationDelay + 0.5,
          ease: 'easeOut',
        },
      },
    },
  }

  return (
    <motion.div className={s.heroContent__right}>
      <div className={cn(s.heroContent__imgs)}>
        <motion.div
          className={cn(s.heroContent__imgSecondary, s.img1)}
          style={{
            bottom: y1,
          }}
        >
          <motion.img
            variants={imgVariant}
            src="images/hero-secondary.jpeg"
            alt="hero"
          />
        </motion.div>

        <motion.div className={s.heroContent__imgPrimary}>
          <motion.img
            variants={imgVariant}
            src="images/hero-primary.jpg"
            alt="hero"
          />
        </motion.div>

        <motion.div
          className={cn(s.heroContent__imgSecondary, s.img2)}
          style={{
            top: y2,
          }}
        >
          <motion.img
            variants={imgVariant}
            src="images/hero-tertiary.jpeg"
            alt="hero"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
