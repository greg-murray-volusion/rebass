import React from 'react'
import { storiesOf } from '@storybook/react'
import { Flex, DotButton } from '../src'

const displayName = { displayName: 'DotButton' }

storiesOf('DotButton', module)
  .addWithJSX('Default', () => (
    <Flex>
      <DotButton active />
      <DotButton />
      <DotButton />
    </Flex>
  ), displayName)
