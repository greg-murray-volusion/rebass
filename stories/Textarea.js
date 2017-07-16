import React from 'react'
import { storiesOf } from '@storybook/react'
import { Textarea } from '../src'

const displayName = { displayName: 'Textarea' }

storiesOf('Textarea', module)
  .addWithJSX('Default', () => (
    <Textarea />
  ), displayName)
