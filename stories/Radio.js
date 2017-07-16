import React from 'react'
import { storiesOf } from '@storybook/react'
import { Radio } from '../src'

const displayName = { displayName: 'Radio' }

storiesOf('Radio', module)
  .addWithJSX('Default', () => (
    <Radio />
  ), displayName)
