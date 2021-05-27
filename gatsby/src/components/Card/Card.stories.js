import React from 'react'
import Card from './index.js'

export default {
  title: 'Components/Card',
  component: Card,
  decorators: [
    (Story) => (
        <Story />
    ),
  ],
}

const Template = (args) => <Card {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
}
