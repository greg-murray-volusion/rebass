import React from 'react'
import { storiesOf } from '@storybook/react'
import { Overlay } from '../src'

const displayName = { displayName: 'Overlay' }

storiesOf('Overlay', module)
  .addWithJSX('Default', () => (
    <Overlay>
      Hello
    </Overlay>
  ), displayName)
