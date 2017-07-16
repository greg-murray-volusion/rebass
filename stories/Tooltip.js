import React from 'react'
import { storiesOf } from '@storybook/react'
import { Tooltip, Flex, Relative } from '../src'

const displayName = { displayName: 'Tooltip' }

storiesOf('Tooltip', module)
  .addWithJSX('Default', () => (
    <Flex>
      <Relative my={4}>
        <Tooltip text='Hello'>
          Beep Boop
        </Tooltip>
      </Relative>
    </Flex>
  ), displayName)
