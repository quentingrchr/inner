/* story for title component */
import { FC } from 'react'
import { Story, ComponentMeta } from '@storybook/react'
import { Services, Props } from './index'
import { Button, SectionTitle } from '@components'
export default {
  title: 'Organisms/Sections/Services',
  component: Services,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Services>

const Template: Story<Props> = (args: Props) => (
  <Services
    title={
      <SectionTitle>
        <em>The</em> title you would like to <em>use</em>
      </SectionTitle>
    }
    button={
      <Button color="dark" variant="primary" onClick={() => {}}>
        A Button
      </Button>
    }
    items={[
      {
        subtitle: '01',
        title: 'A cool title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare,',
      },
      {
        subtitle: '02',
        title: 'Another cool title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare,',
      },
      {
        subtitle: '03',
        title: 'Some text for the third item',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare,',
      },
    ]}
  />
)

export const Default = Template.bind({})
Default.args = {}
