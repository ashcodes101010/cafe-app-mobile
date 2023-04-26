/* eslint-disable react/no-array-index-key */
import React, { useRef } from 'react'
// import { Rating } from 'react-native-ratings'
import { Text, View } from 'react-native'
import {
  ReviewContainer,
  ReviewTop,
  ReviewerNameText
} from './styles'
import StaticRatingStars from '../../../../components/StaticRatingStars'

const Review = () => {

  return (
    <ReviewContainer>
        <ReviewTop>
            <StaticRatingStars rating={10}/>
            <ReviewerNameText>Student Name</ReviewerNameText>
        </ReviewTop>
        <Text>This cafe has the best food on campus. Their cinnamon rolls are soft and doughy. They also have free plant based milks.</Text>
    </ReviewContainer>
  )
}

export default Review
