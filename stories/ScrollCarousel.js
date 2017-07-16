import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  ScrollCarousel,
  CarouselSlide,
  Heading,
} from '../src'

const displayName = { displayName: 'ScrollCarousel' }

storiesOf('ScrollCarousel', module)
  .addWithJSX('Default', () => (
    <ScrollCarousel>
      <CarouselSlide
        py={6}
        bg='gray'>
        <Heading>Hello</Heading>
      </CarouselSlide>
      <CarouselSlide
        py={6}
        color='white'
        bg='blue'>
        <Heading>Hello</Heading>
      </CarouselSlide>
      <CarouselSlide
        py={6}
        color='white'
        bg='green'>
        <Heading>Hello</Heading>
      </CarouselSlide>
    </ScrollCarousel>
  ), displayName)
