import React from 'react'
import { storiesOf } from '@storybook/react'
import { ButtonTransparent } from '../src'

const displayName = { displayName: 'ButtonTransparent' }

storiesOf('ButtonTransparent', module)
  .addWithJSX('Default', () => (
    <ButtonTransparent
      children='Hello'
    />
  ), displayName)
