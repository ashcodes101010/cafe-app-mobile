import styled from 'styled-components'
import theme from '../../theme'

export const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`

export const Button = styled.TouchableOpacity`
  width: 157px;
  height: 42px;
  background-color: ${theme.colors.harvardCrimson};
  border-radius: 7px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-direction: row;
  margin-bottom: 20px;
`

export const ButtonText = styled.Text`
  font-size: 16px;
  color: white;
  font-weight: 400;
`

export const Title = styled.Text`
  font-size: 40px;
  color: ${theme.colors.harvardCrimson};
  font-weight: 500;
  margin-bottom: 50px;
`
