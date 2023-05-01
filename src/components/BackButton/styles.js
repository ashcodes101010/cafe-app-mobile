import styled from 'styled-components'

export const BackButtonContainer = styled.TouchableOpacity`
  align-self: flex-start;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
`

export const BackButtonText = styled.Text`
  font-size: 16px;
  color: #737373;
  font-weight: 500;
`

export const hitSlop = {
  top: 20,
  left: 20,
  bottom: 20,
  right: 20,
}
