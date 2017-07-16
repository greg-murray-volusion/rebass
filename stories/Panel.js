import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Panel,
  PanelHeader,
  PanelFooter,
  Box,
} from '../src'

const displayName = { displayName: 'Panel' }

storiesOf('Panel', module)
  .addWithJSX('Default', () => (
    <Panel>
      <PanelHeader>Hello Panel</PanelHeader>
      <Box p={2}>
        Hello there, Panel
      </Box>
      <PanelFooter>Footer</PanelFooter>
    </Panel>
  ), displayName)
  .addWithJSX('Blue', () => (
    <Panel color='blue'>
      <PanelHeader
        color='white'
        bg='blue'>
        Hello Panel
      </PanelHeader>
      <Box p={2}>
        Hello there, Panel
      </Box>
      <PanelFooter color='blue'>
        Footer
      </PanelFooter>
    </Panel>
  ), displayName)
