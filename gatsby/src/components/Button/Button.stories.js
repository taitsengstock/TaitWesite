import React from 'react'
import Button from './index.js'

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story) => (
        <Story />
    ),
  ],
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
}
