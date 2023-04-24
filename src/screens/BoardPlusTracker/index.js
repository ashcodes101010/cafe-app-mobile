import React from 'react'
import { Text } from 'react-native'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import {
  EXP_DATE, MAX_BALANCE, PLACEHOLDER_DATA, TRACKER_HEIGHT,
} from './constants'
import {
  BalanceText, Line, MainView, TrackerInner, TrackerOuter, TrackerText,
} from './styles'

const BoardPlusTracker = ({ navigation }) => (
  <>
    <MainView>
      <Text>{`BoardPlus expires ${EXP_DATE}.`}</Text>
      <TrackerOuter>
        <Line>
          <TrackerText>
            {`$${MAX_BALANCE}`}
          </TrackerText>
        </Line>
        <TrackerInner height={TRACKER_HEIGHT * (PLACEHOLDER_DATA.boardPlusBalance / MAX_BALANCE)}>
          <Line>
            <TrackerText>
              {`$${PLACEHOLDER_DATA.boardPlusBalance}`}
            </TrackerText>
          </Line>
        </TrackerInner>
      </TrackerOuter>
    </MainView>
    <Footer navigation={navigation} current="BoardPlusTracker" />
    <Header
      title="BoardPlus"
      Icons={() => (
        <BalanceText>{`$${PLACEHOLDER_DATA.boardPlusBalance}`}</BalanceText>
      )}
    />
  </>
)

export default BoardPlusTracker
