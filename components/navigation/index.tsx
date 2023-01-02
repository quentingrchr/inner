import React, { FC, useState } from 'react'
import s from './styles.module.scss'
import { BurgerIcon, CartIcon, Icon, NavigationMenu } from '@components'

export type Props = {}

export const Navigation: FC<Props> = (props) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  return (
    <div className={s.container}>
      <header className={s.header}>
        <div className={s.header__left}>
          <Icon type="logo" size={90} />
        </div>
        <ul className={s.header__right}>
          <li className={s.rightItem}>
            <CartIcon quantity={2} />
          </li>
          <li className={s.rightItem}>
            <BurgerIcon
              isOpen={menuIsOpen}
              onClick={() => setMenuIsOpen(!menuIsOpen)}
            />
          </li>
        </ul>
      </header>
      <NavigationMenu isOpen={menuIsOpen} />
    </div>
  )
}
