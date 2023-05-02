import styled from 'styled-components'
import theme from '../../../../theme'

export const ReviewContainer = styled.View`
  min-height: 80px;
  width: 100%;
  background-color: white;
  border-bottom-width: 1px;
  border-bottom-color: #DEDEDE;
  padding-bottom: 8px;
  margin-bottom: 8px;
  gap: 5px;
  flex-direction: column;
`

export const ReviewTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Left = styled.View`
  flex-direction: row;
  gap: 5px;
  justify-content: flex-start;
`

export const ReviewerNameText = styled.Text`
  font-weight: 500;
  font-size: 20px;
  color: black;
`

export const DateText = styled.Text`
  font-weight: 400;
  font-size: 14px;
  color: gray;
`

export const LocationText = styled.Text`
  font-weight: 400;
  font-size: 14px;
  color: ${theme.colors.pressableBlue};
`

export const Bottom = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 5px;
`

export const hitSlop = {
  top: 25, left: 30, right: 30, bottom: 25,
}
