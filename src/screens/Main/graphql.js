import gql from 'graphql-tag'

export const GET_CAFES = gql`
  query getLocations {
    getLocations {
      id
      fullName
      shortAddress
      description
      longitude
      latitude
      image
      ratingInfo
    }
  }
`
