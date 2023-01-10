import type { NextPage } from 'next'
import Head from 'next/head'
import { Hero, PageLayout } from '@components'
import { Catchphrase, Services, SectionTitle, Button } from '@components'

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
        <Services
          title={
            <SectionTitle>
              <em>We</em> do it best.
            </SectionTitle>
          }
          button={
            <Button color="dark" variant="primary" onClick={() => {}}>
              Learn More
            </Button>
          }
          items={[
            {
              subtitle: '01',
              title: 'Custom Furniture',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare,',
            },
            {
              subtitle: '02',
              title: 'Furniture Layouts',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare,',
            },
            {
              subtitle: '03',
              title: 'Space Planning',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare,',
            },
          ]}
        />
      </PageLayout>
    </>
  )
}

export default Home
