import gql from 'graphql-tag'

export const UPDATE_BALANCE = gql`
  mutation updateBPBalance($boardPlusBalance: Float) {
    updateBPBalance(boardPlusBalance: $boardPlusBalance)
  }
`
