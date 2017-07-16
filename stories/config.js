import React from 'react'
import { configure, addDecorator, setAddon } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import JSXAddon from 'storybook-addon-jsx';
import { injectGlobal } from 'styled-components'
import { Box } from 'grid-styled'
import { createProvider } from 'funcup'
import XRay from 'react-x-ray'
import Provider from '../src/Provider'

setAddon(JSXAddon);

injectGlobal([], {
  '*': {
    boxSizing: 'border-box'
  },
  body: {
    lineHeight: 1.5,
    margin: 0
  }
})

const hoc = createProvider({
  xray: false
})

const toggleXRay = state => ({ xray: !state.xray })

const Demo = hoc(props => (
  <Provider>
    <XRay disabled={!props.xray}>
      <Box
        p={3}
        onClick={e => props.update(toggleXRay)}>
        {props.story()}
      </Box>
    </XRay>
  </Provider>
))

addDecorator(story => (
  <Demo story={story} />
))

setOptions({
  name: 'Rebass',
  url: 'http://jxnblk.com/rebass',
  showDownPanel: true,
})

const req = require.context('.', true, /\.js$/)

const load = () => {
  // require('./Library')
  req.keys().forEach(req)
}

configure(load, module)
