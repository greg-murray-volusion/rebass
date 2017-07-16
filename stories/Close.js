import React from 'react'
import { storiesOf } from '@storybook/react'
import { Close } from '../src'

const displayName = { displayName: 'Close' }

storiesOf('Close', module)
  .addWithJSX('Default', () => (
    <Close />
  ), displayName)
