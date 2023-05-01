import React, {
  useState, useEffect, useContext,
} from 'react'
import { AirbnbRating } from 'react-native-ratings'
import {
  Keyboard, TouchableWithoutFeedback, TextInput,
} from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { useMutation } from '@apollo/client'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { ADD_REVIEW } from './graphql'
import {
  BackButton,
  BackButtonText,
  MainView,
  StyledView,
  SubmitButton,
  SubmitButtonRow,
  SubmitButtonText,
  styles,
} from './styles'
import BackIcon from '../../../assets/icons/BackIcon'
import CheckBox from './components/Checkbox'
import { Context } from '../../context'

const LeaveReview = ({ navigation, route }) => {
  const { cafeId, cafeName } = route.params
  const { getCafes } = useContext(Context)

  const [rating, setRating] = useState(0)
  const [review, setReview] = useState('')
  const [anon, setAnon] = useState(false)

  const [addReview] = useMutation(ADD_REVIEW, {
    variables: {
      input: {
        locationId: cafeId, review, rating: 2 * rating, anonymous: anon,
      },
    },
    onCompleted: () => {
      if (getCafes) {
        getCafes()
      }
      navigation.goBack()
    },
  })

  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) {
      setRating(0)
      setAnon(false)
      setReview('')
    }
  }, [isFocused])

  const disabled = !review

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <MainView>
          <BackButton onPress={() => navigation.push('Cafe', { id: cafeId })}>
            <BackIcon size={30} />
            <BackButtonText>Back</BackButtonText>
          </BackButton>
          <StyledView>
            <AirbnbRating
              showRating={false}
              defaultRating={rating}
              type="custom"
              count={5}
              size={30}
              selectedColor="#E77C40"
              onFinishRating={r => setRating(r)}
              fractions={5}
            />
          </StyledView>
          <StyledView>
            <TextInput
              style={styles.input}
              value={review}
              placeholder="Write your review here"
              autoFocus
              onChangeText={text => setReview(text)}
              multiline
            />
          </StyledView>
          <SubmitButtonRow>
            <CheckBox label="Post Anonymously?" status={anon ? 'checked' : 'unchecked'} onPress={() => setAnon(!anon)} />
            <SubmitButton onPress={() => addReview()} disabled={disabled}>
              <SubmitButtonText>Submit</SubmitButtonText>
            </SubmitButton>
          </SubmitButtonRow>

        </MainView>
      </TouchableWithoutFeedback>
      <Footer navigation={navigation} current="LeaveReview" />
      <Header title={cafeName} />
    </>
  )
}

export default LeaveReview
