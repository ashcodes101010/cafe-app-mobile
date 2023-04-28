import React from 'react'
import { useQuery } from '@apollo/client'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { MainView } from './styles'
import { PURCHASE_HISTORY } from './graphql'
import PurchaseTable from './components/PurchaseTable'

const PurchaseHistory = ({ navigation }) => {
  const { data } = useQuery(PURCHASE_HISTORY, {
    fetchPolicy: 'cache-and-network',
  })

  const history = data?.userPurchaseHistory || []

  return (
    <>
      <MainView>
        <PurchaseTable history={history} />
      </MainView>
      <Footer navigation={navigation} current="Profile" />
      <Header title="Purchase History" />
    </>
  )
}

export default PurchaseHistory
