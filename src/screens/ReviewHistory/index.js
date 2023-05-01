import React from 'react'
import { useQuery } from '@apollo/client'
import { ActivityIndicator } from 'react-native-paper'
import Review from '../Cafe/components/Review'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import {
  Body,
  MainView,
  StyledScrollView,
  styles,
} from './styles'
import { USER_REVIEWS } from './graphql'
import theme from '../../theme'
import BackButton from '../../components/BackButton'

const ReviewHistory = ({ navigation }) => {
  const { data, loading } = useQuery(USER_REVIEWS, {
    fetchPolicy: 'cache-and-network',
  })

  const reviews = data?.userReviews || []

  return (
    <>
      <MainView>
        <BackButton navigation={navigation} style={styles.backButton} />
        <StyledScrollView>
          <Body>
            {loading && !data && (
              <ActivityIndicator
                style={styles.loading}
                animating
                size="small"
                color={theme.colors.harvardCrimson}
              />
            )}
            {reviews.map(r => (
              <Review
                key={r.id}
                review={r}
                navigation={navigation}
                showLocation
              />
            ))}
          </Body>
        </StyledScrollView>
      </MainView>
      <Footer navigation={navigation} current="Profile" />
      <Header title="Review History" />
    </>
  )
}

export default ReviewHistory
