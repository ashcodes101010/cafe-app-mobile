import React from 'react'
import { useQuery, useMutation } from '@apollo/client'
import {
  ActivityIndicator, Dialog, Portal, Button, Provider,
} from 'react-native-paper'
import Review from '../Cafe/components/Review'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import {
  Body,
  MainView,
  NoReviewText,
  StyledScrollView,
  styles,
} from './styles'
import { USER_REVIEWS, DELETE_REVIEW } from './graphql'
import theme from '../../theme'
import BackButton from '../../components/BackButton'
import { GET_CAFES } from '../Main/graphql'

const ReviewHistory = ({ navigation }) => {
  const { data, loading } = useQuery(USER_REVIEWS, {
    fetchPolicy: 'cache-and-network',
  })

  const [deleteReview] = useMutation(DELETE_REVIEW, {
    refetchQueries: [
      { query: USER_REVIEWS }, { query: GET_CAFES },
    ],
  })

  const reviews = data?.userReviews || []

  const [visible, setVisible] = React.useState(false)
  const [toBeDeleted, setToBeDeleted] = React.useState('')
  const showDialog = () => setVisible(true)
  const hideDialog = () => setVisible(false)

  const noReviews = data?.userReviews && !loading && !reviews.length

  return (
    <>
      <Provider>
        <MainView>
          <BackButton navigation={navigation} style={styles.backButton} />
          <Portal>
            <Dialog style={styles.dialog} visible={visible} onDismiss={hideDialog}>
              <Dialog.Title style={styles.dialogCenter}>Delete Review?</Dialog.Title>
              <Dialog.Actions style={styles.dialogCenter}>
                <Button
                  labelStyle={styles.dialogButton}
                  onPress={() => { deleteReview({ variables: { id: toBeDeleted } }); hideDialog() }}
                >
                  Confirm
                </Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
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
              {noReviews && <NoReviewText>No written reviews.</NoReviewText>}
              {reviews.map(r => (
                <Review
                  allowDelete
                  onDelete={() => { showDialog(); setToBeDeleted(r.id) }}
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
      </Provider>
    </>
  )
}

export default ReviewHistory
