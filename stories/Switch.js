import React from 'react'
import { storiesOf } from '@storybook/react'
import { createProvider } from 'funcup'
import { Switch } from '../src'

const displayName = { displayName: 'Switch' }

storiesOf('Switch', module)
  .addWithJSX('Default', () => (
    <Switch />
  ), displayName)
  .addWithJSX('Checked', () => (
    <Switch checked />
  ), displayName)
  .addWithJSX('Live', () => (
    <Live />
  ), displayName)

const toggle = state => ({ checked: !state.checked })
const hoc = createProvider({ checked: false })

const Live = hoc(props => (
  <Switch
    checked={props.checked}
    onClick={e => {
      props.update(toggle)
    }}
  />
))
