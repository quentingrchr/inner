import type { NextPage } from 'next'
import Head from 'next/head'
import { Hero, PageLayout } from '@components'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> Simple title </title>
      </Head>
      <PageLayout>
        <Hero />
      </PageLayout>
    </>
  )
}

export default Home
