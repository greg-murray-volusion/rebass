import React from 'react'
import { storiesOf } from '@storybook/react'
import { ButtonOutline } from '../src'

const displayName = { displayName: 'ButtonOutline' }

storiesOf('ButtonOutline', module)
  .addWithJSX('Default', () => (
    <ButtonOutline
      children='Hello'
    />
  ), displayName)
  .addWithJSX('Colors', () => (
    <ButtonOutline
      color='green'
      children='Hello'
    />
  ), displayName)
