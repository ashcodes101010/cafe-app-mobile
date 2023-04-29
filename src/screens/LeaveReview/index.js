import React, { useContext, useState, useRef } from 'react'
import { AirbnbRating } from 'react-native-ratings';
import {
  Keyboard, TouchableWithoutFeedback, TextInput, Text
} from 'react-native'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
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

const LeaveReview = ({ navigation, route }) => {
  const { cafeId, cafeName } = route.params;

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [anon, setAnon] = useState(false);
  
  function submitReview() {
    console.log(rating)
    if (review.length == 0 && rating > 0) {
        // submit only rating
        navigation.navigate('Cafe', { id: cafeId })
    } else if (review.length > 0) {
        // submit rating + review
        navigation.navigate('Cafe', { id: cafeId })
    }
    // otherwise do not submit
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <MainView>
            <BackButton onPress={() => navigation.navigate('Cafe', { id: cafeId })}>
                <BackIcon size={30}/>
                <BackButtonText>Back</BackButtonText>
            </BackButton>
            <StyledView>
                <AirbnbRating
                    showRating={false}
                    defaultRating={0}
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
