import gql from 'graphql-tag'

export const USER_REVIEWS = gql`
  query userReviews {
    userReviews {
      id
      review
      rating
      reviewerName
      locationId
      locationName
      createdAt
    }
  }
`
