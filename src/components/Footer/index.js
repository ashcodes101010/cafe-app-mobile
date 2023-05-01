import React from 'react'
import { TouchableOpacity } from 'react-native'
import { PATHS } from './constants'
import { Container, FooterText, hitSlop } from './styles'

const Footer = ({ navigation, current }) => (
  <Container style={{ shadowOffset: { width: 10, height: 0 } }}>
    {PATHS.map(({ path, label }) => (
      <TouchableOpacity
        key={label}
        onPress={() => navigation.navigate(path)}
        hitSlop={hitSlop}
      >
        <FooterText highlight={path === current}>{label}</FooterText>
      </TouchableOpacity>
    ))}
  </Container>
)

export default Footer
