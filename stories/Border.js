import React from 'react'
import { storiesOf } from '@storybook/react'
import { Border } from '../src'

const displayName = { displayName: 'Border' }

storiesOf('Border', module)
  .addWithJSX('Default', () => (
    <Border p={2}>
      Hello
    </Border>
  ), displayName)
  .addWithJSX('Color', () => (
    <Border
      p={2}
      color='blue'>
      Hello
    </Border>
  ), displayName)
  .addWithJSX('Width', () => (
    <Border
      p={2}
      borderWidth={4}
      color='blue'>
      Hello
    </Border>
  ), displayName)
  .addWithJSX('Directions', () => (
    <Border
      py={2}
      top
      bottom>
      Hello
    </Border>
  ), displayName)
