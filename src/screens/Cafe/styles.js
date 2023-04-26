import styled from 'styled-components'

export const MainView = styled.View`
  flex: 1;
  background-color: white;
  margin-top: 120px;
`

export const Body = styled.View`
  padding: 20px;
`

export const DescText = styled.Text`
  font-size: 14px;
  color: black;
  font-weight: 400;
  margin-top: 10px;
`

export const IconText = styled.Text`
  font-size: 16px;
  color: black;
  font-weight: 500;
  margin-left: 6px;
`

export const TextAndIcon = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 7px;
  max-width: 90%;
`

export const hitSlop = {
  top: 30,
  bottom: 30,
  left: 30,
  right: 30,
}
