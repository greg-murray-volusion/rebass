import React from 'react'
import { storiesOf } from '@storybook/react'
import { createProvider } from 'funcup'
import {
  Drawer,
  Heading,
  Fixed,
  Pre,
  Button,
} from '../src'

const hoc = createProvider({ open: true })
const toggle = state => ({ open: !state.open })

const Live = hoc(props => (
  <div>
    {props.open && (
      <Fixed
        top
        right
        bottom
        left
        onClick={e => props.update(toggle)}
      />
    )}
    <Button
      onClick={e => props.update(toggle)}
      children='Open'
    />
    <Pre>{props.open ? 'Open' : 'Closed'}</Pre>
    <Drawer
      open={props.open}
      position={props.position}
      color='white'
      bg='black'>
      <Heading>Hello</Heading>
    </Drawer>
  </div>
))

const displayName = { displayName: 'Drawer' }

storiesOf('Drawer', module)
  .addWithJSX('Left', () => (
    <Live />
  ), displayName)
  .addWithJSX('Right', () => (
    <Live position='right' />
  ), displayName)
  .addWithJSX('Top', () => (
    <Live position='top' />
  ), displayName)
  .addWithJSX('Bottom', () => (
    <Live position='bottom' />
  ), displayName)


