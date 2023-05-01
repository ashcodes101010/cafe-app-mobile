import gql from 'graphql-tag'

export const ADD_PURCHASE = gql`
  mutation addPurchase($input: PurchaseInput) {
    addPurchase(input: $input) {
        id
    }
  }
`

export const UPDATE_BALANCE = gql`
  mutation updateBPBalance($boardPlusBalance: Float) {
    updateBPBalance(boardPlusBalance: $boardPlusBalance)
  }
`