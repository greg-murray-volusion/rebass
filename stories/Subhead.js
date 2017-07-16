import React from 'react'
import { storiesOf } from '@storybook/react'
import { Subhead } from '../src'

const displayName = { displayName: 'Subhead' }

storiesOf('Subhead', module)
  .addWithJSX('Default', () => (
    <Subhead
      children='Hello'
    />
  ), displayName)
