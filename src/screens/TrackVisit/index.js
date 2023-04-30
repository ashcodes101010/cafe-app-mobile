import React, { useContext, useState, useRef } from 'react'
import { AirbnbRating } from 'react-native-ratings';
import {
  Keyboard, TouchableWithoutFeedback, TextInput, Text
} from 'react-native'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import {Picker} from '@react-native-picker/picker';
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
import { TouchableOpacity } from 'react-native-gesture-handler';
import BackIcon from '../../../assets/icons/BackIcon';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const TrackVisit = ({ navigation, route }) => {
  const { cafeId, cafeName } = route.params;

  const [date, setDate] = useState(new Date())
  const [cost, setCost] = useState('')
  const [method, setMethod] = useState('BoardPlus')

  function submitVisit() {
    console.log(date)
    console.log(cost)
    console.log(method)
    console.log(cafeName)
    if (cost.length > 0) {
        // TODO: submit info
        navigation.navigate('Cafe', { id: cafeId })
    }
  }
  
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <MainView>
            <BackButton onPress={() => navigation.navigate('Cafe', { id: cafeId })}>
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
