import React from 'react'
import { storiesOf } from '@storybook/react'
import { Tabs, TabItem } from '../src'

const displayName = { displayName: 'Tabs' }

storiesOf('Tabs', module)
  .addWithJSX('Default', () => (
    <Tabs>
      <TabItem
        href='#!'
        active
        children='Hello'
      />
      <TabItem
        href='#!'
        children='Tabs'
      />
      <TabItem
        href='#!'
        children='Three'
      />
    </Tabs>
  ), displayName)
