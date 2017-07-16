import React from 'react'
import { storiesOf } from '@storybook/react'
import { Fixed } from '../src'

const displayName = { displayName: 'Fixed' }

storiesOf('Fixed', module)
  .addWithJSX('Default', () => (
    <Fixed
      children='Fixed'
    />
  ), displayName)
  .addWithJSX('Bottom right', () => (
    <Fixed
      bottom
      right
      children='Fixed'
    />
  ), displayName)
