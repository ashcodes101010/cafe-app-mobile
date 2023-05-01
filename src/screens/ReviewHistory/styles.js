import { StyleSheet } from 'react-native'
import styled from 'styled-components'

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

export const styles = StyleSheet.create({
  loading: {
    marginTop: 150,
  },
  backButton: {
    marginBottom: 10,
    marginLeft: 20,
    marginTop: 20,
  },
})
