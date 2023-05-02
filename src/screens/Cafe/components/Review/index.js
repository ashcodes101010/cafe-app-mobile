import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import {
  ReviewContainer,
  ReviewTop,
  ReviewerNameText,
  DateText,
  Bottom,
  LocationText,
  Left,
  hitSlop,
} from './styles'
import StaticRatingStars from '../../../../components/StaticRatingStars'
import TrashIcon from '../../../../../assets/icons/TrashIcon'

const Review = ({
  navigation, review, showLocation = false, allowDelete = false, onDelete,
}) => (
  <ReviewContainer>
    <ReviewTop>
      <Left>
        {allowDelete && (
        <TouchableOpacity onPress={onDelete} hitSlop={hitSlop}>
          <TrashIcon />
        </TouchableOpacity>
        )}
        <StaticRatingStars rating={review.rating} />
      </Left>
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
