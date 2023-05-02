import React from 'react'
import { Container, Title, LeftContainer } from './styles'
import { TouchableOpacity } from 'react-native'
import BackIcon from '../../../assets/icons/BackIcon'

const Header = ({ navigation, back = false, title = '', Icons = () => <></> }) => (
  <Container style={{ shadowOffset: { width: 10, height: 0 } }}>
    <LeftContainer>
      {back && (<TouchableOpacity onPress={() => navigation.goBack()}>
        <BackIcon color='white' size={40}/>
      </TouchableOpacity>)}
      <Title length={title.length}>{title}</Title>
    </LeftContainer>
    <Icons />
  </Container>
)

export default Header
