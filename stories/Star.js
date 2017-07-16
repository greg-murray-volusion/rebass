import React from 'react'
import { storiesOf } from '@storybook/react'
import { Star, Flex, Text } from '../src'

const displayName = { displayName: 'Star' }

storiesOf('Star', module)
  .addWithJSX('Default', () => (
    <Flex>
      <Star checked />
      <Star checked />
      <Star checked />
      <Star half />
      <Star />
    </Flex>
  ), displayName)
