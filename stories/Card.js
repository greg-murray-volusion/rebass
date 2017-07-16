import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Card,
  BackgroundImage,
  Subhead
} from '../src'
import { photo } from './constants'

const displayName = { displayName: 'Card' }

storiesOf('Card', module)
  .addWithJSX('Default', () => (
    <Card
      children='Hello Card'
    />
  ), displayName)
  .addWithJSX('Padded', () => (
    <Card
      p={3}
      children='Hello Card'
    />
  ), displayName)
  .addWithJSX('Image', () => (
    <Card w={256}>
      <BackgroundImage
        src={photo}
      />
      <Subhead p={2}>Hello</Subhead>
    </Card>

  ), displayName)
