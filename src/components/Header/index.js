import React from 'react'
import { TouchableOpacity } from 'react-native'
import {
  Container, Title, LeftContainer, hitSlop,
} from './styles'
import BackIcon from '../../../assets/icons/BackIcon'

const Header = ({
  navigation, back = false, title = '', Icons = () => <></>,
}) => (
  <Container style={{ shadowOffset: { width: 10, height: 0 } }}>
    <LeftContainer>
      {back && (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        hitSlop={hitSlop}
      >
        <BackIcon color="white" size={40} />
      </TouchableOpacity>
      )}
      <Title length={title.length}>{title}</Title>
    </LeftContainer>
    <Icons />
  </Container>
)

export default Header
