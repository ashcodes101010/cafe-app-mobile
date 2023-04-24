import React from 'react'
import { Container, Title } from './styles'

const Header = ({ title = '', Icons = () => <></> }) => (
  <Container style={{ shadowOffset: { width: 10, height: 0 } }}>
    <Title>{title}</Title>
    <Icons />
  </Container>
)

export default Header
