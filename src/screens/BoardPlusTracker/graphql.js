import gql from 'graphql-tag'

export const BP_HISTORY = gql`
  query boardPlusPurchases {
    boardPlusPurchases {
      id
      locationName
      amount
      purchaseDate
    }
  }
`
