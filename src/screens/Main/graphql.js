import gql from 'graphql-tag'

export const GET_CAFES = gql`
  query getLocations {
    getLocations {
      id
      fullName
      description
      longitude
      latitude
    }
  }
`
