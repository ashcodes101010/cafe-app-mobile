import React, { useContext } from 'react'
import { Text } from 'react-native'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Context } from '../../context'
import {
  EXP_DATE, MAX_BALANCE, TRACKER_HEIGHT,
} from './constants'
import {
  BalanceText, Line, MainView, TrackerInner, TrackerOuter, TrackerText, HistoryText
} from './styles'
import PurchaseHistory from './components/PurchaseHistory'

const BoardPlusTracker = ({ navigation }) => {
  const { viewer: { viewer: { boardPlusBalance } } } = useContext(Context)
  return (
    <>
      <MainView>
        <Text>{`BoardPlus expires ${EXP_DATE}.`}</Text>
        <TrackerOuter>
          <Line>
            <TrackerText>
              {`$${MAX_BALANCE}`}
            </TrackerText>
          </Line>
          <TrackerInner height={TRACKER_HEIGHT * (boardPlusBalance / MAX_BALANCE)}>
            <Line>
              <TrackerText>
                {`$${boardPlusBalance}`}
              </TrackerText>
            </Line>
          </TrackerInner>
        </TrackerOuter>
        <HistoryText>History</HistoryText>
        <PurchaseHistory/>
      </MainView>
      <Footer navigation={navigation} current="BoardPlusTracker" />
      <Header
        title="BoardPlus"
        Icons={() => (
          <BalanceText>{`$${boardPlusBalance}`}</BalanceText>
        )}
      />
    </>
  )
}

export default BoardPlusTracker
