import styled from 'styled-components'

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

export const ReviewerNameText = styled.Text`
  font-weight: 500;
  font-size: 20px;
  color: black;
`

export const DateText = styled.Text`
  font-weight: 400;
  font-size: 14px;
  color: gray;
  margin-top: 5px;
`
