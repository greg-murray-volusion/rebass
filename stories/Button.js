import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '../src'

const displayName = { displayName: 'Button' };

storiesOf('Button', module)
  .addWithJSX('Default', () => (
    <Button
      children='Hello'
    />
  ), displayName)
  .addWithJSX('Colors', () => (
    <div>
      <Button
        m={1}
        color='black'
        bg='red'
        children='Red'
      />
      <Button
        m={1}
        bg='orange'
        children='Orange'
      />
      <Button
        m={1}
        bg='yellow'
        children='Yellow'
      />
      <Button
        m={1}
        bg='green'
        children='Green'
      />
    </div>
  ), displayName)
  .addWithJSX('Padding', () => (
    <Button
      px={4}
      py={3}
      children='Hello'
    />
  ), displayName)
  .addWithJSX('Big font', () => (
    <Button
      f={3}
      children='Hello'
    />
  ), displayName)
  .addWithJSX('Width', () => (
    <Button
      w={[ 1, 1/2 ]}
      children='Hello'
    />
  ), displayName)
  .addWithJSX('Link', () => (
    <Button
      is='a'
      href='#!'
      children='Hello'
    />
  ), displayName)

