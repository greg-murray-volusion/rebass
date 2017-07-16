import React from 'react'
import { storiesOf } from '@storybook/react'
import { Image } from '../src'
import { photo } from './constants'

const displayName = { displayName: 'Image' }

storiesOf('Image', module)
  .addWithJSX('Default', () => (
    <Image src={photo} />
  ), displayName)
