import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Heading,
  Subhead,
  Lead,
  Text,
  Small,
  Blockquote,
  Pre,
  Code
} from '../src'

const displayName = { displayName: 'Typography' }

storiesOf('Typography', module)
  .addWithJSX('Default', () => (
    <div>
      <Heading>Hello Heading</Heading>
      <Subhead>Hello Subhead</Subhead>
      <Lead>Hello Lead</Lead>
      <Text>Hello Text</Text>
      <Small>Hello Small</Small>
      <Blockquote>Hello Blockquote</Blockquote>
      <Pre>Hello Pre</Pre>
      <Code>Hello Code</Code>
    </div>
  ), displayName)
