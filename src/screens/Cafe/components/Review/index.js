import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import {
  ReviewContainer,
  ReviewTop,
  ReviewerNameText,
  DateText,
  Bottom,
  LocationText,
  hitSlop,
} from './styles'
import StaticRatingStars from '../../../../components/StaticRatingStars'

const Review = ({ navigation, review, showLocation = false }) => (
  <ReviewContainer>
    <ReviewTop>
      <StaticRatingStars rating={review.rating} />
      <ReviewerNameText>{review.reviewerName}</ReviewerNameText>
    </ReviewTop>
    <Text style={{ color: review.review ? 'black' : 'gray' }}>
      {review.review || 'No comment provided.'}
    </Text>
    <Bottom>
      <DateText>
        {(new Date(review.createdAt)).toLocaleString([], { dateStyle: 'short', timeStyle: 'short' })}
      </DateText>
      {showLocation && (
        <TouchableOpacity
          hitSlop={hitSlop}
          onPress={() => navigation.navigate('Cafe', { id: review.locationId })}
        >
          <LocationText>
            {review.locationName}
          </LocationText>
        </TouchableOpacity>
      )}
    </Bottom>
  </ReviewContainer>
)

export default Review
