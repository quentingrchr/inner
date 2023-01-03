import React, { FC, useEffect } from 'react'
import s from './styles.module.scss'
import cn from 'classnames'
import { Entry } from './entry'
import { SocialIcon } from '@components'
import { animate, motion } from 'framer-motion'
import { open } from 'fs'

type Entry = {
  label: string
  to: string
  number: number
}
export type Props = {
  isOpen?: boolean
}

const dummyEntries: Entry[] = [
  {
    label: 'Home',
    to: '/',
    number: 1,
  },
  {
    label: 'Blog',
    to: '/blog',
    number: 2,
  },
  {
    label: 'About',
    to: '/about',
    number: 3,
  },
  {
    label: 'Services',
    to: '/services',
    number: 4,
  },

  {
    label: 'Shop',
    to: '/shop',
    number: 5,
  },
  {
    label: 'Contact',
    to: '/contact',
    number: 6,
  },
]

export const NavigationMenu: FC<Props> = ({ isOpen = false }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.height = '100vh'
    } else {
      document.body.style.overflow = 'auto'
      document.body.style.height = 'auto'
    }
  }, [isOpen])
  return (
    <motion.nav
      className={s.menu}
      initial="close"
      animate={isOpen ? 'open' : 'close'}
      exit="close"
      variants={{
        close: {
          height: 0,
          transition: {
            duration: 0.6,
          },
        },
        open: {
          height: '100vh',
        },
      }}
      transition={{
        duration: 1.2,
        ease: 'easeOut',
      }}
    >
      <div className={s.menuContent}>
        <motion.ul
          initial="close"
          animate={isOpen ? 'open' : 'close'}
          exit="close"
          variants={{
            open: {
              transition: {
                staggerChildren: 0.2,
                staggerDirection: 1,
                delayChildren: 1,
              },
            },
            close: {
              transition: {
                staggerChildren: 0,
                staggerDirection: -1,
              },
            },
          }}
          className={s.menuEntries}
        >
          {dummyEntries.map((entry, index) => (
            <Entry key={index} {...entry} />
          ))}
        </motion.ul>
        <motion.ul
          className={s.menuSocials}
          initial="close"
          animate={isOpen ? 'open' : 'close'}
          exit="close"
          variants={{
            open: {
              opacity: 1,
              transition: {
                delay: 2.2,
                duration: 0.6,
              },
            },
            close: {
              opacity: 0,
              transition: {
                delay: 0,
                duration: 0.2,
              },
            },
          }}
        >
          <li className={s.menuSocial}>
            <SocialIcon type="facebook" to="https://facebook.com" />
          </li>
          <li className={s.menuSocial}>
            <SocialIcon type="twitter" to="https://twitter.com" />
          </li>
          <li className={s.menuSocial}>
            <SocialIcon type="instagram" to="https://instagram.com" />
          </li>
          <li className={s.menuSocial}>
            <SocialIcon type="youtube" to="https://youtube.com" />
          </li>
        </motion.ul>
      </div>
    </motion.nav>
  )
}
