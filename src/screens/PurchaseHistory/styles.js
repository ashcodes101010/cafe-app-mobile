import styled from 'styled-components'
import { StyleSheet } from 'react-native'

export const MainView = styled.View`
  flex: 1;
  background-color: white;
  margin-top: 120px;
`

export const styles = StyleSheet.create({
  scroll: {
    height: '40%',
    flexGrow: 0,
  },
  date: {
    fontSize: 10,
  },
  dataText: {
    fontSize: 12,
  },
})
