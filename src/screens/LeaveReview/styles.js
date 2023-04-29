import styled from 'styled-components'
import { StyleSheet } from 'react-native'
import theme from '../../theme'

export const MainView = styled.View`
  flex: 1;
  background-color: white;
  margin-top: 120px;
  padding: 23px;
`

export const StyledView = styled.View`
  padding: 10px;
  background-color: white;
  borderBottomWidth: 1px;
  borderBottomColor: #DEDEDE;
`

export const SubmitButtonRow = styled.View`
  align-self: flex-end;
`

export const SubmitButton = styled.TouchableOpacity`
  width: 90px;
  height: 42px;
  background-color: ${theme.colors.harvardCrimson};
  border-radius: 7px;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  flex-direction: row;
  margin-top: 20px;
`

export const BackButton = styled.TouchableOpacity`
  align-self: flex-start;
//   border-radius: 7px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  margin-bottom: 10px;
`

export const BackButtonText = styled.Text`
  font-size: 16px;
  color: #737373;
  font-weight: 500;
`

export const SubmitButtonText = styled.Text`
  font-size: 16px;
  color: white;
  font-weight: 500;
`

export const styles = StyleSheet.create({
    input: {
      backgroundColor: 'white',
      padding: 0,
      height: 100,
      fontSize: 16,
    },
  })
  