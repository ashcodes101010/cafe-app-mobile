import React, { useContext, useState, useRef, useEffect } from 'react'
import { AirbnbRating } from 'react-native-ratings';
import {
  Keyboard, TouchableWithoutFeedback, TextInput, Text
} from 'react-native'
import { useIsFocused } from '@react-navigation/native';
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { useMutation } from '@apollo/client'
import { ADD_REVIEW } from './graphql'
import {
    BackButton,
  BackButtonText,
  MainView,
  StyledView,
  SubmitButton,
  SubmitButtonRow,
  SubmitButtonText,
  styles
} from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import BackIcon from '../../../assets/icons/BackIcon';
import CheckBox from './components/Checkbox';
import { GET_REVIEWS } from '../Cafe/graphql';

const LeaveReview = ({ navigation, route }) => {
  const { cafeId, cafeName, onCompleted } = route.params;

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [anon, setAnon] = useState(false);

  const [addReview] = useMutation(ADD_REVIEW, {
    refetchQueries: [{ query: GET_REVIEWS, variables: {locationId: cafeId}, onCompleted: onCompleted }],
  })

  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) {
      setRating(0);
      setAnon(false);
      setReview('');
    }
 }, [isFocused]);
  
  function submitReview() {
    if (rating > 0) {
        // submit review
        addReview({ variables: { input: { locationId: cafeId, review: review, rating: 2*rating, anonymous: anon } } });
        navigation.push('Cafe', { id: cafeId });
    }
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <MainView>
            <BackButton onPress={() => navigation.push('Cafe', { id: cafeId })}>
                <BackIcon size={30}/>
                <BackButtonText>Back</BackButtonText>
            </BackButton>
            <StyledView>
                <AirbnbRating
                    showRating={false}
                    defaultRating={rating}
                    type='custom'
                    count={5}
                    size={30}
                    selectedColor='#E77C40'
                    onFinishRating={(rating) => setRating(rating)}
                />
            </StyledView>
            <StyledView>
                <TextInput
                    style={styles.input}
                    value={review}
                    placeholder={`Write your review here`}
                    autoFocus
                    onChangeText={(text) => setReview(text)}
                    multiline={true}
                />
            </StyledView>
            <SubmitButtonRow>
                <CheckBox label='Post Anonymously?' status={anon ? 'checked' : 'unchecked'} onPress={() => setAnon(!anon)}/>
                <SubmitButton onPress={submitReview}>
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
