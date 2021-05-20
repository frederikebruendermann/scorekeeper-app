import React from 'react'
import Nav from './Nav'

export default {
  title: 'Nav',
  component: Nav,
}

const Template = args => <Nav {...args} />

export const DefaultNav = Template.bind({})
Nav.args = [
  { children: 'Play', isActive: true },
  { children: 'History', isActive: false },
]
