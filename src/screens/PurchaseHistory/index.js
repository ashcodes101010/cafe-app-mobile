import React from 'react'
import { useQuery } from '@apollo/client'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { MainView, NoPurchaseText, styles } from './styles'
import { PURCHASE_HISTORY } from './graphql'
import PurchaseTable from './components/PurchaseTable'
import BackButton from '../../components/BackButton'

const PurchaseHistory = ({ navigation }) => {
  const { data, loading } = useQuery(PURCHASE_HISTORY, {
    fetchPolicy: 'cache-and-network',
  })

  const history = data?.userPurchaseHistory || []

  const noPurchases = data?.userPurchaseHistory && !loading && !history.length

  return (
    <>
      <MainView>
        <BackButton navigation={navigation} style={styles.backButton} />
        <PurchaseTable history={history} />
        {noPurchases && <NoPurchaseText>No purchases logged.</NoPurchaseText>}
      </MainView>
      <Footer navigation={navigation} current="Profile" />
      <Header title="Purchase History" />
    </>
  )
}

export default PurchaseHistory
