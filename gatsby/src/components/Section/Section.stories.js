import React from 'react'
import Section from './index.js'

export default {
  title: 'Components/Section',
  component: Section,
  decorators: [
    (Story) => (
        <Story />
    ),
  ],
}

const Template = (args) => <Section {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
}
