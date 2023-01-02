import React, { FC } from 'react'
import s from './styles.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import { Icon } from '@components'

export type Props = {
  quantity?: number
  onClick?: () => void
}

function printQuantity(quantity: number): string {
  if (quantity > 99) {
    return '99+'
  }
  return quantity.toString()
}

export const CartIcon: FC<Props> = ({ quantity = 0, onClick = () => {} }) => {
  return (
    <div className={s.container} onClick={onClick} aria-label="Open cart">
      <AnimatePresence>
        {quantity > 0 && (
          <motion.span
            className={s.badge}
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0,
            }}
          >
            {printQuantity(quantity)}
          </motion.span>
        )}
      </AnimatePresence>
      <Icon type="cart" size="md" />
    </div>
  )
}
