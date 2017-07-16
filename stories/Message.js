﻿import React from 'react'
import { storiesOf } from '@storybook/react'
import { Message } from '../src'

const displayName = { displayName: 'Message' }

storiesOf('Message', module)
  .addWithJSX('Default', () => (
    <div>
      <Message mb={2} children='Hello Message' />
      <Message mb={2} bg='red' children='Hello Message' />
      <Message mb={2} bg='orange' children='Hello Message' />
      <Message mb={2} bg='yellow' children='Hello Message' />
      <Message mb={2} bg='green' children='Hello Message' />
    </div>
  ), displayName)
