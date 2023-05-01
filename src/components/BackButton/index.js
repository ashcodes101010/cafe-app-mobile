import React from 'react'
import BackIcon from '../../../assets/icons/BackIcon'
import { BackButtonContainer, BackButtonText, hitSlop } from './styles'

const BackButton = ({ navigation, style = {} }) => (
  <BackButtonContainer hitSlop={hitSlop} onPress={() => navigation.goBack()} style={style}>
    <BackIcon size={30} />
    <BackButtonText>Back</BackButtonText>
  </BackButtonContainer>
)

export default BackButton
