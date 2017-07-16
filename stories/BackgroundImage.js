import React from 'react'
import { storiesOf } from '@storybook/react'
import { BackgroundImage } from '../src'
import { photo } from './constants'

const displayName = { displayName: 'BackgroundImage' }

storiesOf('BackgroundImage', module)
  .addWithJSX('Default', () => (
    <BackgroundImage
      ratio={1/2}
      src={photo}
    />
  ), displayName)
