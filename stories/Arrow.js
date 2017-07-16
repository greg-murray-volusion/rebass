import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button, Arrow } from '../src'

const displayName = { displayName: 'Arrow' }

storiesOf('Arrow', module)
  .addWithJSX('Default', () => (
    <Arrow />
  ), displayName)
  .addWithJSX('Up', () => (
    <Arrow direction='up' />
  ), displayName)
  .addWithJSX('With Button', () => (
    <Button>
      Hello
      <Arrow ml={2} />
    </Button>
  ), displayName)
