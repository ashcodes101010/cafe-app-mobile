import styled from 'styled-components'
import theme from '../../theme'
import { TRACKER_HEIGHT } from './constants'

export const BalanceText = styled.Text`
  font-weight: 600;
  font-size: 32px;
  text-align: left;
  color: #FFFFFF;
  text-decoration: ${props => (props.highlight ? 'underline' : 'none')};
  text-decoration-color: white;
`

export const MainView = styled.View`
  flex: 1;
  background-color: white;
  margin-top: 120px;
  padding: 23px;
`

export const TrackerOuter = styled.View`
  height: ${TRACKER_HEIGHT}px;
  width: 100px;
  background-color: #D9D9D9;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  margin-top: 30px;
`

export const TrackerInner = styled.View`
  position: absolute;
  bottom: 0px;
  height: ${props => props.height}px;
  width: 100%;
  background-color: ${theme.colors.harvardCrimson};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`

export const Line = styled.View`
  position: absolute;
  top: -2px;
  height: 4px;
  background-color: black;
  width: 120px;
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
  z-index: 10;
`

export const TrackerText = styled.Text`
  position: absolute;
  top: -8px;
  right: -73px;
  font-weight: 600;
  font-size: 16px;
  text-align: left;
  color: black;
  width: 65px;
`

export const InnerTrackerText = styled.Text`
  position: absolute;
  top: 4px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  color: white;
  width: 65px;
  align-self: center;
`

export const Button = styled.TouchableOpacity`
  width: 140px;
  height: 42px;
  background-color: ${theme.colors.harvardCrimson};
  border-radius: 7px;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  flex-direction: row;
  margin-top: 20px;
`

export const ButtonText = styled.Text`
  font-size: 14px;
  color: white;
  font-weight: 500;
`

export const HistoryText = styled.Text`
  font-weight: 600;
  font-size: 22px;
  text-align: left;
  color: black;
  margin-top: 40px;
  margin-bottom: 5px;
`

export const PurchaseText = styled.Text`
  font-weight: 400;
  font-size: 14px;
  color: ${theme.colors.pressableBlue};
  margin-bottom: 5px;
`

export const Container = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 10px;
`

export const hitSlop = {
  top: 30,
  bottom: 30,
  left: 30,
  right: 30,
}
