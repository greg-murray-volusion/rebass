import React from 'react'
import { storiesOf } from '@storybook/react'
import { Text } from '../src'

const displayName = { displayName: 'Text' }

storiesOf('Text', module)
  .addWithJSX('Default', () => (
    <Text
      children='Hello Rebass'
    />
  ), displayName)
  .addWithJSX('Center', () => (
    <Text
      is='div'
      center
      children='Hello'
    />
  ), displayName)
  .addWithJSX('Bold', () => (
    <Text
      is='div'
      bold
      children='Hello'
    />
  ), displayName)
