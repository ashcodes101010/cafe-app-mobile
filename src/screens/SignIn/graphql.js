import gql from 'graphql-tag'

export const SIGN_IN = gql`
  mutation googleSignIn($input: GoogleInput) {
    googleSignIn(input: $input) {
      id
    }
  }
`

export const DEV_SIGN_IN = gql`
  mutation developerSignIn {
    developerSignIn {
      id
    }
  }
`
