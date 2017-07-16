import React from 'react'
import { storiesOf } from '@storybook/react'
import { Lead } from '../src'

const displayName = { displayName: 'Lead' }

storiesOf('Lead', module)
  .addWithJSX('Default', () => (
    <Lead
      children='Hello Lead'
    />
  ), displayName)
