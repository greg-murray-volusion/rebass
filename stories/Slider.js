import React from 'react'
import { storiesOf } from '@storybook/react'
import { Slider } from '../src'

const displayName = { displayName: 'Slider' }

storiesOf('Slider', module)
  .addWithJSX('Default', () => (
    <Slider />
  ), displayName)
