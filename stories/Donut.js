import React from 'react'
import { storiesOf } from '@storybook/react'
import { createProvider } from 'funcup'
import { Donut, Slider } from '../src'

const hoc = createProvider({ value: 2 / 3 })
const setValue = value => state => ({ value })

const Live = hoc(props => (
  <div>
    <Donut value={props.value} />
    <Slider
      value={props.value}
      min={0}
      max={1}
      step={1/100}
      onChange={e => {
        const n = parseFloat(e.target.value)
        props.update(setValue(n))
      }}
    />
  </div>
))

const displayName = { displayName: 'Donut' }

storiesOf('Donut', module)
  .addWithJSX('Default', () => (
    <Live />
  ), displayName)
  .addWithJSX('Sizes', () => (
    <div>
      <Donut
        value={1/2}
        size={320}
      />
      <Donut
        value={1/2}
        size={160}
      />
      <Donut
        value={1/2}
        size={80}
      />
    </div>
  ), displayName)
  .addWithJSX('Colors', () => (
    <div>
      <Donut
        value={1/2}
        color='red'
      />
      <Donut
        value={1/2}
        color='yellow'
      />
      <Donut
        value={1/2}
        color='green'
      />
    </div>
  ), displayName)
