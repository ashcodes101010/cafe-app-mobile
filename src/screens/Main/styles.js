import { StyleSheet } from 'react-native'
import styled from 'styled-components'
import theme from '../../theme'

export const StyledScrollView = styled.ScrollView`
  flex-grow: 1;
  background-color: transparent;
  margin-bottom: 65px;
  margin-top: 120px;
  width: 100%;
`

export const HorizontalTagScroll = styled.ScrollView`
  height: 40px;
  background-color: ${theme.colors.harvardCrimson}
  overflow: hidden;
`

export const CafeContainer = styled.Pressable`
  min-height: 130px;
  width: 100%;
  background-color: white;
  padding: 20px;
  margin-bottom: 2px;
  flex-direction: row;
`

export const CafeContainerRight = styled.View`
  margin-left: 25px;
  width: 54%;
`

export const CafeName = styled.Text`
  font-weight: 500;
  font-size: 18px;
  color: #252B42;
`

export const AddressText = styled.Text`
  font-weight: 500;
  font-size: 14px;
  color: #737373;
  margin-bottom: 10px;
`

export const TagText = styled.Text`
  font-weight: 400;
  font-size: 12px;
  color: ${theme.colors.pressableBlue};
  margin-bottom: 5px;
`

export const PressableTextTag = styled.Text`
  font-weight: 400;
  font-size: 16px;
  padding: 11px;
  color: white;
`

export const RatingText = styled.Text`
  font-weight: 500;
  font-size: 14px;
  color: #737373;
  margin-left: 5px;
  margin-top: 2px;
`

export const MilesText = styled.Text`
  font-weight: 700;
  font-size: 12px;
  color: white;
`

export const SortByText = styled.Text`
  font-weight: 600;
  font-size: 12px;
  color: white;
`

export const MilesContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 35px;
  background: ${props => (props.closed ? 'gray' : '#67C757')};
  border-radius: 2.5px;
`

export const MoreInfoButton = styled.TouchableOpacity`
  background-color: #23A6F0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 35px;
  border-radius: 2.5px;
  margin-left: 10px;
`

export const Buttons = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 2px;
`

export const RatingContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`

export const hitSlop = {
  top: 30,
  bottom: 30,
  left: 30,
  right: 30,
}

export const styles = StyleSheet.create({
  loading: {
    marginTop: 150,
  },
  selectedTag: {
    fontWeight: 600,
    textDecorationLine: 'underline',
  },
})
