import React, { FC } from 'react'
import s from './styles.module.scss'
import { motion } from 'framer-motion'
import { HeroLeft } from './hero-left'
import { HeroRight } from './hero-right'

export type Props = {}

export const Hero: FC<Props> = (props: Props) => {
  return (
    <motion.section
      className={s.heroContainer}
      initial="initial"
      animate="animate"
    >
      <div className={s.heroContent}>
        <HeroLeft animationDelay={0.5} />
        <HeroRight />
      </div>
    </motion.section>
  )
}
