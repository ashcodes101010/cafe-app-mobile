import gql from 'graphql-tag'

export const ADD_PURCHASE = gql`
  mutation addPurchase($input: PurchaseInput!) {
    addPurchase(input: $input) {
        id
    }
  }
`
