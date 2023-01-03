import React, { FC, useState } from 'react'
import s from './styles.module.scss'
import {
  BurgerIcon,
  CartIcon,
  Icon,
  LogoIcon,
  NavigationMenu,
} from '@components'
import Link from 'next/link'

export type Props = {}

export const Navigation: FC<Props> = (props) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  return (
    <div className={s.container}>
      <header className={s.header}>
        <div className={s.header__left}>
          <Link href="/">
            <a className={s.header__logo}>
              <LogoIcon color={menuIsOpen ? 'light' : 'dark'} />
            </a>
          </Link>
        </div>
        <ul className={s.header__right}>
          <li className={s.rightItem}>
            <div className={s.header__cart}>
              <CartIcon quantity={2} color={menuIsOpen ? 'light' : 'dark'} />
            </div>
          </li>
          <li className={s.rightItem}>
            <div className={s.header__burger}>
              <BurgerIcon
                isOpen={menuIsOpen}
                onClick={() => setMenuIsOpen(!menuIsOpen)}
                color={menuIsOpen ? 'light' : 'dark'}
              />
            </div>
          </li>
        </ul>
      </header>
      <NavigationMenu isOpen={menuIsOpen} />
    </div>
  )
}
