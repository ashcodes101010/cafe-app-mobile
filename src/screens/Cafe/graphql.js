import gql from 'graphql-tag'

export const GET_REVIEWS = gql`
  query locationReviews($locationId: ID!) {
    locationReviews(locationId: $locationId) {
      id
      review
      rating
      reviewerName
      createdAt
    }
  }
`
