import React from 'react'
import { storiesOf } from '@storybook/react'
import { ButtonCircle } from '../src'

const displayName = { displayName: 'ButtonCircle' }

storiesOf('ButtonCircle', module)
  .addWithJSX('Default', () => (
    <ButtonCircle
      children='Hello'
    />
  ), displayName)
