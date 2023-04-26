/* eslint-disable react/no-array-index-key */
import React, { useRef } from 'react'
import { Rating } from 'react-native-ratings'
import { Text } from 'react-native'
import {
  ReviewContainer,
} from './styles'

const Review = () => {

  return (
    <ReviewContainer>
        <Rating
            type='custom'
            ratingImage='star'
            ratingCount={5}
            ratingColor='#E77C40'
            readonly={true}
            startingValue={4}
        />
        <Text>Student Name</Text>
        <Text>Review Text</Text>
    </ReviewContainer>
  )
}

export default Review
