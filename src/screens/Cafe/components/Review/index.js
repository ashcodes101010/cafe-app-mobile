import React from 'react'
import { Text } from 'react-native'
import {
  ReviewContainer,
  ReviewTop,
  ReviewerNameText,
  DateText,
} from './styles'
import StaticRatingStars from '../../../../components/StaticRatingStars'

const Review = ({ review }) => (
  <ReviewContainer>
    <ReviewTop>
      <StaticRatingStars rating={review.rating} />
      <ReviewerNameText>{review.reviewerName}</ReviewerNameText>
    </ReviewTop>
    <Text>{review.review}</Text>
    <DateText>
      {(new Date(review.createdAt)).toLocaleString([], { dateStyle: 'short', timeStyle: 'short' })}
    </DateText>
  </ReviewContainer>
)

export default Review
