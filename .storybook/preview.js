import "../styles/reset.scss"
import "../styles/base.scss"

import { PageLayout } from '../components'



export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#f9f1ec'
      },
      {
        name: 'dark',
        value: '#4c4037'
      }
    ]
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}