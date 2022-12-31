import '@styles/reset.scss'
import '@styles/base.scss'
import { RecoilRoot } from 'recoil'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}

export default MyApp
