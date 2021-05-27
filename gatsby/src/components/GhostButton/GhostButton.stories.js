import React from 'react'
import GhostButton from './index.js'

export default {
  title: 'Components/GhostButton',
  component: GhostButton,
  decorators: [
    (Story) => (
        <Story />
    ),
  ],
}

const Template = (args) => <GhostButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
}
