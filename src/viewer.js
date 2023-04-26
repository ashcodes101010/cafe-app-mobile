import gql from 'graphql-tag'

export const VIEWER = gql`
  query viewer {
    viewer {
      id
      fullName
      email
      boardPlusBalance
    }
  }`
