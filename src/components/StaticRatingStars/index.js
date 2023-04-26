import React from 'react'
import Star from '../../../assets/icons/Star'
import { Container } from './styles'

const StaticRatingStars = ({
  style, rating, scalar = 1, width = 110,
}) => (
  <Container style={style} width={width}>
    {[...Array(5).keys()].map(i => {
      const scoreIn5 = rating / 2
      const adjScore = Math.max(scoreIn5 - i, 0)
      return <Star scalar={scalar} fill={adjScore} />
    })}
  </Container>
)

export default StaticRatingStars
