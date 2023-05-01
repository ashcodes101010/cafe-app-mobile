import React from 'react'
import { useQuery } from '@apollo/client'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { MainView, styles } from './styles'
import { PURCHASE_HISTORY } from './graphql'
import PurchaseTable from './components/PurchaseTable'
import BackButton from '../../components/BackButton'

const PurchaseHistory = ({ navigation }) => {
  const { data } = useQuery(PURCHASE_HISTORY, {
    fetchPolicy: 'cache-and-network',
  })

  const history = data?.userPurchaseHistory || []

  return (
    <>
      <MainView>
        <BackButton navigation={navigation} style={styles.backButton} />
        <PurchaseTable history={history} />
      </MainView>
      <Footer navigation={navigation} current="Profile" />
      <Header title="Purchase History" />
    </>
  )
}

export default PurchaseHistory
