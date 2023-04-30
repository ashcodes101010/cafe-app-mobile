import { useQuery } from '@apollo/client'
import React, { useContext } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Context } from '../../context'
import PurchaseTable from '../PurchaseHistory/components/PurchaseTable'
import {
  EXP_DATE, MAX_BALANCE, TRACKER_HEIGHT,
} from './constants'
import { BP_HISTORY } from './graphql'
import {
  BalanceText, Line, MainView,
  TrackerInner, TrackerOuter, TrackerText,
  InnerTrackerText,
  ButtonText,
  Button,
  Container,
  HistoryText,
  PurchaseText,
  hitSlop,
  ColumnView,
} from './styles'

const BoardPlusTracker = ({ navigation }) => {
  const { viewer: { viewer: { boardPlusBalance } } } = useContext(Context)
  const { data } = useQuery(BP_HISTORY, {
    fetchPolicy: 'cache-and-network',
  })

  const history = data?.boardPlusPurchases || []

  return (
    <>
      <MainView>
        <Text>{`BoardPlus expires ${EXP_DATE}.`}</Text>
        <Container>
          <TrackerOuter>
            <Line>
              <TrackerText>
                {`$${MAX_BALANCE}`}
              </TrackerText>
            </Line>
            <TrackerInner height={TRACKER_HEIGHT * (boardPlusBalance / MAX_BALANCE)}>
              {boardPlusBalance / MAX_BALANCE > 0.15
                ? (
                  <InnerTrackerText>
                    {`$${boardPlusBalance}`}
                  </InnerTrackerText>
                )
                : (
                  <Line>
                    <TrackerText>
                      {`$${boardPlusBalance}`}
                    </TrackerText>
                  </Line>
                )}
            </TrackerInner>
          </TrackerOuter>
          <ColumnView>
            <Button onPress={() => navigation.replace('TrackVisit')}>
              <ButtonText>Track Purchase</ButtonText>
            </Button>
            <Button onPress={() => navigation.replace('Profile')}>
              <ButtonText>Update Balance</ButtonText>
            </Button>
          </ColumnView>
        </Container>
        <HistoryText>BoardPlus Purchases</HistoryText>
        <TouchableOpacity
          hitSlop={hitSlop}
          onPress={() => navigation.navigate('PurchaseHistory')}
        >
          <PurchaseText>Full purchase history</PurchaseText>
        </TouchableOpacity>
        <PurchaseTable history={history} boardPlusOnly />
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
