import React from 'react'
import { storiesOf } from '@storybook/react'
import { Divider } from '../src'

const displayName = { displayName: 'Divider' }

storiesOf('Divider', module)
  .addWithJSX('Default', () => (
    <Divider />
  ), displayName)
  .addWithJSX('Color', () => (
    <Divider color='blue4' />
  ), displayName)
