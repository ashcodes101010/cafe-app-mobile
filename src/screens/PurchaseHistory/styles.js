import styled from 'styled-components'
import { StyleSheet } from 'react-native'

export const MainView = styled.View`
  flex: 1;
  background-color: white;
  margin-top: 120px;
  margin-bottom: 65px;
`

export const styles = StyleSheet.create({
  scroll: {
    flexGrow: 0,
  },
  date: {
    fontSize: 10,
  },
  dataText: {
    fontSize: 12,
  },
  backButton: {
    marginBottom: 10,
    marginLeft: 20,
    marginTop: 20,
  },
})
