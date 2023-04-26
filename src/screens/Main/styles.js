import { StyleSheet } from 'react-native'
import styled from 'styled-components'

export const StyledScrollView = styled.ScrollView`
  flex-grow: 1;
  background-color: transparent;
  margin-bottom: 65px;
  margin-top: 120px;
  border-radius: 10px;
  width: 100%;
`

export const CafeContainer = styled.View`
  min-height: 130px;
  width: 100%;
  background-color: white;
  padding: 20px;
  margin-bottom: 2px;
  flex-direction: row;
`

export const CafeContainerRight = styled.View`
  margin-left: 25px;
  width: 50%;
`

export const CafeName = styled.Text`
  font-weight: 500;
  font-size: 18px;
  color: #252B42;
`

export const AddressText = styled.Text`
  font-weight: 500;
  font-size: 15px;
  color: #737373;
  margin-bottom: 10px;
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

export const MilesContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 35px;
  background: #67C757;
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
})
