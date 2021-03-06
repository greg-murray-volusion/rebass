import React from 'react'
import { Flex } from 'rebass'
import { NavLink } from 'rebass'

const Footer = props => (
  <footer>
    <Flex mx={-2} py={4}>
      <NavLink
        href='http://jxnblk.com/rebass'
        children='Rebass'
      />
      <NavLink
        href='https://github.com/jxnblk/rebass'
        children='GitHub'
      />
      <NavLink
        ml='auto'
        href='http://jxnblk.com'
        children='Made by Jxnblk'
      />
    </Flex>
  </footer>
)

export default Footer
