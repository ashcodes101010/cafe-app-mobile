import { StyleSheet } from 'react-native'
import styled from 'styled-components'
import theme from '../../theme'

export const MainView = styled.View`
  flex: 1;
  background-color: white;
  margin-top: 120px;
`

export const Body = styled.View`
  padding: 20px;
`

export const StyledScrollView = styled.ScrollView`
  flex-grow: 1;
  background-color: transparent;
  margin-bottom: 65px;
  width: 100%;
`

export const NoReviewText = styled.Text`
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  color: gray;
  margin-top: 5px;
`

export const styles = StyleSheet.create({
  loading: {
    marginTop: 150,
  },
  backButton: {
    marginBottom: 10,
    marginLeft: 20,
    marginTop: 20,
  },
  dialog: {
    backgroundColor: 'white',
    alignSelf: 'center',
    width: 300,
  },
  dialogCenter: {
    alignSelf: 'center',
  },
  dialogButton: {
    color: `${theme.colors.harvardCrimson}`,
    fontSize: 16,
  },
})
