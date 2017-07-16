import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Group,
  Button,
  ButtonOutline
} from '../src'

const displayName = { displayName: 'Group' }

storiesOf('Group', module)
  .addWithJSX('Default', () => (
    <Group>
      <Button children='Hello' />
      <ButtonOutline children='Hello' />
      <ButtonOutline children='Hello' />
    </Group>
  ), displayName)
