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
      tags
      image
      externalLink
      ratingInfo
      hours {
        id
        openHour
        openMin
        closeHour
        closeMin
        monday
        tuesday
        wednesday
        thursday
        friday
        saturday
        sunday
        extraInfo
        hoursUncertain
      }
    }
  }
`
