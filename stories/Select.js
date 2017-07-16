import React from 'react'
import { storiesOf } from '@storybook/react'
import { Select } from '../src'

const displayName = { displayName: 'Select' }

storiesOf('Select', module)
  .addWithJSX('Default', () => (
    <Select>
      <option>Hello</option>
      <option>Hi</option>
    </Select>
  ), displayName)
