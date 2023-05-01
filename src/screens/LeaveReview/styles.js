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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const SubmitButton = styled.TouchableOpacity`
  width: 90px;
  height: 42px;
  background-color: ${props => (props.disabled ? 'gray' : theme.colors.harvardCrimson)};
  border-radius: 7px;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  flex-direction: row;
  margin-top: 20px;
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
  checkbox: {
    height: 20,
    width: 20,
  },
  backButton: {
    marginBottom: 10,
  },
})
