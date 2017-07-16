import React from 'react'
import { storiesOf } from '@storybook/react'
import { Toolbar, NavLink } from '../src'

const displayName = { displayName: 'Toolbar' }

storiesOf('Toolbar', module)
  .addWithJSX('Default', () => (
    <Toolbar>
      <NavLink children='Hello' />
      <NavLink children='Toolbar' />
      <NavLink ml='auto' children='Beep Boop' />
    </Toolbar>
  ), displayName)
