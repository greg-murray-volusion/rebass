import React from 'react'
import { storiesOf } from '@storybook/react'
import { Small } from '../src'

const displayName = { displayName: 'Small' }

storiesOf('Small', module)
  .addWithJSX('Default', () => (
    <Small
      children='Hello Small'
    />
  ), displayName)
  .addWithJSX('Bold', () => (
    <Small
      bold
      children='Hello Small'
    />
  ), displayName)
