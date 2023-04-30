import React, { useContext, useState, useRef, useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { AirbnbRating } from 'react-native-ratings';
import {
  Keyboard, TouchableWithoutFeedback, TextInput, Text
} from 'react-native'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import {Picker} from '@react-native-picker/picker';
import { useMutation } from '@apollo/client'
import {
  BackButton,
  BackButtonText,
  MainView,
  StyledView,
  HorizontalView,
  PromptText,
  SubmitButton,
  SubmitButtonRow,
  SubmitButtonText,
  AnswerText,
  styles
} from './styles'
import BackIcon from '../../../assets/icons/BackIcon';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { ADD_PURCHASE } from './graphql';

const TrackVisit = ({ navigation, route }) => {
  const { cafeId, cafeName } = route.params;

  const [date, setDate] = useState(new Date())
  const [cost, setCost] = useState('')
  const [method, setMethod] = useState('BoardPlus')

  const [addPurchase] = useMutation(ADD_PURCHASE, {
  })

  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) {
      setCost('');
      setDate(new Date());
      setMethod('BoardPlus');
    }
 }, [isFocused]);

  function submitVisit() {
    if (cost.length > 0) {
        addPurchase({ variables: { input: { locationId: cafeId, amount: parseFloat(cost), paymentMethod: method, purchaseDate: date } } });
        navigation.push('Cafe', { id: cafeId })
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

            {/* location selector, default to current location */}
            <HorizontalView>
              <PromptText>Location:</PromptText>
              <AnswerText>{cafeName}</AnswerText>
            </HorizontalView>

            {/* date selector, default to current date */}
            <HorizontalView>
              <PromptText>Date of Visit:</PromptText>
              <RNDateTimePicker 
                mode="date" 
                value={date}
                onChange={(e, d) => setDate(d)}
                maximumDate={new Date()}
              />
            </HorizontalView>

            {/* enter cost */}
            <HorizontalView>
              <PromptText>Cost of Purchase:</PromptText>
              <TextInput
                style={styles.input}
                value={`${cost}`}
                placeholder={'$0'}
                maxLength={3}
                inputMode="decimal"
                // onBlur={onSubmitBoardPlus}
                onChangeText={e => setCost(e)}
                // onSubmitEditing={onSubmitBoardPlus}
              />
            </HorizontalView>
            
            {/* enter BP or CC or other */}
            <HorizontalView>
              <PromptText>Method:</PromptText>
              <Picker
                selectedValue={method}
                style={styles.picker}
                itemStyle={styles.item}
                onValueChange={(itemValue, itemIndex) =>
                  setMethod(itemValue)
                }>
                <Picker.Item style={styles.item} label="BoardPlus" value="BoardPlus" />
                <Picker.Item label="Crimson Cash" value="Crimson Cash" />
                <Picker.Item label="Other" value="Other" />
              </Picker>
            </HorizontalView>

            <SubmitButtonRow>
                <SubmitButton onPress={submitVisit}>
                    <SubmitButtonText>Submit</SubmitButtonText>
                </SubmitButton>
            </SubmitButtonRow>
            
        </MainView>
      </TouchableWithoutFeedback>
      <Footer navigation={navigation} current="TrackVisit" />
      <Header title='Track a Visit' />
    </>
  )
}

export default TrackVisit
