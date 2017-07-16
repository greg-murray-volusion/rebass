import React from 'react'
import { storiesOf } from '@storybook/react'
import { Avatar } from '../src'
import { photo } from './constants'

const displayName = { displayName: 'Avatar' }

storiesOf('Avatar', module)
  .addWithJSX('Default', () => (
    <Avatar src={photo} />
  ), displayName)
  .addWithJSX('Size 96', () => (
    <Avatar
      src={photo}
      size={96}
    />
  ), displayName)
