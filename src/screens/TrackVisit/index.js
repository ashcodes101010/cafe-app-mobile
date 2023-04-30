import React, { useContext, useState, useRef, useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'
import {
  Keyboard, TouchableWithoutFeedback, TextInput, Text
} from 'react-native'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import {Picker} from '@react-native-picker/picker';
import { useMutation, useQuery } from '@apollo/client'
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
import DropDownPicker from 'react-native-dropdown-picker';

import { ADD_PURCHASE, GET_CAFES } from './graphql';

const TrackVisit = ({ navigation, route }) => {
  const { cafeId } = route.params ? route.params : '';

  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState(cafeId);
  const [locations, setLocations] = useState([]);

  const [date, setDate] = useState(new Date())
  const [cost, setCost] = useState('')

  const [openMethod, setOpenMethod] = useState(false);
  const [method, setMethod] = useState('BoardPlus');
  const methods = [
    {label: 'BoardPlus', value: 'BoardPlus'},
    {label: 'CrimsonCash', value: 'CrimsonCash'},
    {label: 'Other', value: 'Other'},
  ]

  const setUpItems = (locations) => {
    const items = []
    locations.forEach(l => {
      items.push({label: l.fullName, value: l.id})
    });
    setLocations(items)
  }

  const { data } = useQuery(GET_CAFES, {
    fetchPolicy: 'cache-and-network',
    onCompleted: () => setUpItems(data.getLocations),
  })

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
        addPurchase({ variables: { input: { locationId: location, amount: parseFloat(cost), paymentMethod: method, purchaseDate: date } } });
        navigation.push('Cafe', { id: cafeId })
    }
  }
  
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <MainView>
            {!data && (
            <ActivityIndicator
              style={styles.loading}
              animating
              size="small"
              color={theme.colors.harvardCrimson}
            />
            )}
            <BackButton onPress={() => route.params ? navigation.push('Cafe', { id: cafeId }) : navigation.push('BoardPlusTracker', { id: cafeId })}>
                <BackIcon size={30}/>
                <BackButtonText>Back</BackButtonText>
            </BackButton>

            {/* location selector, default to current location */}
            <HorizontalView style={{zIndex: 3}}>
              <PromptText>Location:</PromptText>
              <DropDownPicker
                containerStyle={styles.containerPicker}
                placeholder={'Select a Location'}
                textStyle={styles.label}
                labelStyle={styles.label}
                open={open}
                value={location}
                items={locations}
                setOpen={setOpen}
                setValue={setLocation}
              />
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
            <HorizontalView style={{zIndex: 2}}>
              <PromptText>Method:</PromptText>
              <DropDownPicker
                containerStyle={styles.containerPicker}
                textStyle={styles.label}
                labelStyle={styles.label}
                open={openMethod}
                value={method}
                items={methods}
                setOpen={setOpenMethod}
                setValue={setMethod}
              />
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
