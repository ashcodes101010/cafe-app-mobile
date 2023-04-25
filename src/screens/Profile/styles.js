import styled from 'styled-components'
import theme from '../../theme'

export const MainView = styled.View`
  flex: 1;
  background-color: white;
  margin-top: 120px;
  padding: 23px;
`

export const Button = styled.TouchableOpacity`
  width: 120px;
  height: 42px;
  background-color: ${theme.colors.harvardCrimson};
  border-radius: 7px;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  flex-direction: row;
  margin-top: 20px;
`

export const ButtonText = styled.Text`
  font-size: 16px;
  color: white;
  font-weight: 500;
`
