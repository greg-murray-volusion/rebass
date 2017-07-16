import React from 'react'
import { storiesOf } from '@storybook/react'
import { Heading } from '../src'

const displayName = { displayName: 'Heading' }

storiesOf('Heading', module)
  .addWithJSX('Default', () => (
    <Heading
      children='Hello'
    />
  ), displayName)
  .addWithJSX('Center', () => (
    <Heading
      center
      children='Hello'
    />
  ), displayName)
  .addWithJSX('Not bold', () => (
    <Heading
      bold={false}
      children='Hello'
    />
  ), displayName)
  .addWithJSX('H1', () => (
    <Heading
      is='h1'
      children='Hello'
    />
  ), displayName)
