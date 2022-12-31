import React, { FC } from 'react'
import s from './styles.module.scss'
import { CartIcon, Icon } from '@components'

export type Props = {}

export const Navigation: FC<Props> = (props) => {
  return (
    <div className={s.container}>
      <header className={s.header}>
        <div className={s.header__left}>
          <div className={s.logo}>
            <Icon type="logo" size={90} />
          </div>
        </div>
        <ul className={s.header__right}>
          <li className={s.rightItem}>
            <CartIcon quantity={2} />
          </li>
          <li className={s.rightItem}>Burger</li>
        </ul>
      </header>
      <nav className={s.menu}>
        <div className={s.menuContent}>
          <ul className={s.menuEntries}>
            <li className={s.menuEntry}>Home</li>
            <li className={s.menuEntry}>About</li>
            <li className={s.menuEntry}>Contact</li>
            <li className={s.menuEntry}>Shop</li>
            <li className={s.menuEntry}>Blog</li>
            <li className={s.menuEntry}>Service</li>
          </ul>
          <ul className={s.menuSocials}>
            <li className={s.menuSocial}>Facebook</li>
            <li className={s.menuSocial}>Twitter</li>
            <li className={s.menuSocial}>Instagram</li>
            <li className={s.menuSocial}>Pinterest</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
