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

export const DELETE_REVIEW = gql`
  mutation deleteReview($id: ID!) {
    deleteReview(id: $id)
  }
`
