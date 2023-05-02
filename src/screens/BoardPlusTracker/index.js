import { useQuery } from '@apollo/client'
import React, { useContext, useEffect } from 'react'
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
  NoPurchaseText,
} from './styles'

const BoardPlusTracker = ({ navigation }) => {
  const { viewer: { viewer: { boardPlusBalance } } } = useContext(Context)
  const { data, loading, refetch } = useQuery(BP_HISTORY, {
    fetchPolicy: 'cache-and-network',
  })

  const history = data?.boardPlusPurchases || []

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', refetch)
    return unsubscribe
  }, [navigation])

  const noPurchases = data?.boardPlusPurchases && !loading && !history.length

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
            {/* BoardPlus Balance State Interface Affordance */}
            <TrackerInner height={Math.max(TRACKER_HEIGHT * (boardPlusBalance / MAX_BALANCE), 0)}>
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
            <Button onPress={() => navigation.navigate('TrackVisit')}>
              <ButtonText>Track Purchase</ButtonText>
            </Button>
            <Button onPress={() => navigation.navigate('Profile')}>
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
        {noPurchases && <NoPurchaseText>No BoardPlus purchases logged.</NoPurchaseText>}
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
