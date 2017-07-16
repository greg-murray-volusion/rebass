import React from 'react'
import { storiesOf } from '@storybook/react'
import { Link } from '../src'

const displayName = { displayName: 'Link' }

storiesOf('Link', module)
  .addWithJSX('Default', () => (
    <Link
      href='#!'
      children='Hello Link'
    />
  ), displayName)
