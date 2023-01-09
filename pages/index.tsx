import type { NextPage } from 'next'
import Head from 'next/head'
import { Hero, PageLayout } from '@components'
import { Catchphrase } from '@components'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> Simple title </title>
      </Head>
      <PageLayout>
        <Hero />
        <Catchphrase title="Presentation">
          A <em>creative template</em> highly suitable for interior design firms
          and those who need an easy, <em>attractive and effective</em> way to
          share their work with a delightful experience.
        </Catchphrase>
      </PageLayout>
    </>
  )
}

export default Home
