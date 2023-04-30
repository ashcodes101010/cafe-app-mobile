import styled from 'styled-components'
import { StyleSheet } from 'react-native'
import theme from '../../theme'

export const MainView = styled.View`
  flex: 1;
  background-color: white;
  margin-top: 120px;
  padding: 23px;
`

export const HorizontalView = styled.View`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`

export const SubmitButtonRow = styled.View`
  display: flex;
`

export const SubmitButton = styled.TouchableOpacity`
  align-self: flex-end;
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

export const PromptText = styled.Text`
  margin-top: 6px;
  font-size: 18px;
  color: black;
  font-weight: 500;
`

export const AnswerText = styled.Text`
  margin-top: 6px;
  font-size: 18px;
  color: #737373;
  font-weight: 400;
`

export const styles = StyleSheet.create({
    input: {
      backgroundColor: 'white',
      marginTop: 8,
      height: 20,
      fontSize: 16,
    },
    containerPicker: {
      marginTop: -10,
      width: 250,
      borderColor: '#737373'
    },
    label: {
      fontSize: 18,
    },
    item: {
      height: 50,
      fontSize: 18,
    }
  })
  