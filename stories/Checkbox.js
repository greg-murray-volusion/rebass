import React from 'react'
import { storiesOf } from '@storybook/react'
import { Checkbox } from '../src'

const displayName = { displayName: 'Checkbox' }

storiesOf('Checkbox', module)
  .addWithJSX('Default', () => (
    <Checkbox />
  ), displayName)
