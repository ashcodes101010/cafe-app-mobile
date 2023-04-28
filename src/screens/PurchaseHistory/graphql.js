import gql from 'graphql-tag'

export const PURCHASE_HISTORY = gql`
  query userPurchaseHistory {
    userPurchaseHistory {
      id
      locationName
      amount
      paymentMethod
      purchaseDate
    }
  }
`
