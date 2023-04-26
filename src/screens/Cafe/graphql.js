import gql from 'graphql-tag'

export const GET_CAFE = gql`
  query getLocation($id: ID!) {
    getLocation(id: $id) {
      id
      fullName
      shortAddress
      description
      longitude
      latitude
      image
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
