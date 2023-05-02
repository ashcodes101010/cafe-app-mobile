import React from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { ActivityIndicator, Dialog, Portal, Text, Button, Provider } from 'react-native-paper'
import Review from '../Cafe/components/Review'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import {
  Body,
  MainView,
  StyledScrollView,
  styles,
} from './styles'
import { USER_REVIEWS, DELETE_REVIEW } from './graphql'
import theme from '../../theme'
import BackButton from '../../components/BackButton'

const ReviewHistory = ({ navigation }) => {
  const { data, loading } = useQuery(USER_REVIEWS, {
    fetchPolicy: 'cache-and-network',
  })

  const [deleteReview] = useMutation(DELETE_REVIEW, {
    refetchQueries: [
      {query: USER_REVIEWS}
    ]
  })

  const reviews = data?.userReviews || []

  const [visible, setVisible] = React.useState(false);
  const [toBeDeleted, setToBeDeleted] = React.useState('');
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <>
    <Provider>
      <MainView>
        <BackButton navigation={navigation} style={styles.backButton} />
        <Portal>
          <Dialog style={styles.dialog} visible={visible} onDismiss={hideDialog}>
            <Dialog.Title style={styles.dialogCenter}>Delete Review?</Dialog.Title>
            {/* <Dialog.Content>
              <Text variant="bodyMedium">Delete Review?</Text>
            </Dialog.Content> */}
            <Dialog.Actions style={styles.dialogCenter}>
              <Button labelStyle={styles.dialogButton} onPress={() => {deleteReview({variables: { id: toBeDeleted }}); hideDialog()}}>Confirm</Button>
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
            {reviews.map(r => (
              <Review
                allowDelete={true}
                onDelete={() => {showDialog(); setToBeDeleted(r.id)}}
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
