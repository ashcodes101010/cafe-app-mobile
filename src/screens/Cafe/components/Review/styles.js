import styled from 'styled-components'

export const ReviewContainer = styled.View`
  min-height: 80px;
  width: 100%;
  background-color: white;
  borderBottomWidth: 1px;
  borderBottomColor: #DEDEDE;
  padding-bottom: 8px;
  margin-bottom: 8px;
  gap: 5px;
  flex-direction: column;
`

export const ReviewTop = styled.View`
  flex-direction: row;
  justifyContent: space-between;
`

export const ReviewerNameText = styled.Text`
  font-weight: 500;
  font-size: 20px;
  color: black;
`