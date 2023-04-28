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

export const Button = styled.TouchableOpacity`
  width: 120px;
  height: 42px;
  background-color: ${theme.colors.harvardCrimson};
  border-radius: 7px;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  flex-direction: row;
  margin-top: 80px;
`

export const ButtonText = styled.Text`
  font-size: 16px;
  color: white;
  font-weight: 500;
`

export const UserInfoText = styled.Text`
  font-size: 16px;
  color: black;
  font-weight: 400;
  flex-direction: row;
  gap: 20px;
  justify-content: space-evenly;
`

export const UserInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const PromptText = styled.Text`
  color: #737373;
`

export const hitSlop = {
  top: 30,
  bottom: 30,
  left: 25,
  right: 25,
}

export const HistoryText = styled.Text`
  font-weight: 400;
  font-size: 14px;
  color: ${theme.colors.pressableBlue};
`

export const Bottom = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: 20px;
  align-self: center;
`

export const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    padding: 0,
    height: 20,
    fontSize: 16,
  },
})
