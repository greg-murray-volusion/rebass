import React from 'react'
import { storiesOf } from '@storybook/react'
import { Label, Input } from '../src'

const displayName = { displayName: 'Input' }

storiesOf('Input', module)
  .addWithJSX('Default', () => (
    <div>
      <Label children='Label' />
      <Input />
    </div>
  ), displayName)
  .addWithJSX('Disabled', () => (
    <Input disabled defaultValue='Hello' />
  ), displayName)
