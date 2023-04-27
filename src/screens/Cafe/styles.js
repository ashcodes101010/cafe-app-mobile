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

export const OpenText = styled.Text`
  font-size: 12px;
  color: ${theme.colors.openGreen};
  font-weight: 500;
  margin-left: 6px;
  margin-top: 3px;
`

export const RatingText = styled.Text`
  font-weight: 500;
  font-size: 14px;
  color: #737373;
  margin-left: 5px;
  margin-top: 2px;
`

export const RatingContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 20px;
`

export const TextAndIcon = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 7px;
  max-width: 90%;
`

export const ReviewText = styled.Text`
  font-weight: 600;
  font-size: 32px;
  text-align: left;
  color: black;
  margin-top: 10px;
`

export const ReviewsContainerTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top: 10px;
`

export const StyledScrollView = styled.ScrollView`
  flex-grow: 1;
  background-color: transparent;
  margin-bottom: 65px;
  width: 100%;
`

export const hitSlop = {
  top: 30,
  bottom: 30,
  left: 30,
  right: 30,
}
