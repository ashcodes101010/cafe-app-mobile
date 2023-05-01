import React, { useState, useEffect, useContext } from 'react'
import { useIsFocused } from '@react-navigation/native'
import {
  Keyboard, TouchableWithoutFeedback, TextInput,
} from 'react-native'
import { useMutation } from '@apollo/client'
import RNDateTimePicker from '@react-native-community/datetimepicker'
import DropDownPicker from 'react-native-dropdown-picker'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import {
  BackButton,
  BackButtonText,
  MainView,
  HorizontalView,
  PromptText,
  SubmitButton,
  SubmitButtonRow,
  SubmitButtonText,
  styles,
  inputHitSlop,
} from './styles'
import BackIcon from '../../../assets/icons/BackIcon'

import { ADD_PURCHASE } from './graphql'
import { Context } from '../../context'

const TrackVisit = ({ navigation, route }) => {
  const { cafeId } = route.params || {}
  const { locations } = useContext(Context)

  const [open, setOpen] = useState(false)
  const [location, setLocation] = useState(cafeId)
  const formattedLocations = locations.map(l => ({ label: l.fullName, value: l.id }))

  const [date, setDate] = useState(new Date())
  const [cost, setCost] = useState('')

  const [openMethod, setOpenMethod] = useState(false)
  const [method, setMethod] = useState('BoardPlus')
  const methods = [
    { label: 'BoardPlus', value: 'BoardPlus' },
    { label: 'CrimsonCash', value: 'CrimsonCash' },
    { label: 'Credit/Debit', value: 'Credit/Debit' },
    { label: 'Other', value: 'Other' },
  ]

  const [addPurchase] = useMutation(ADD_PURCHASE, {
    variables: {
      input: {
        locationId: location,
        amount: parseFloat(cost),
        paymentMethod: method,
        purchaseDate: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`,
      },
    },
    onCompleted: () => navigation.goBack(),
  })

  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) {
      setCost('')
      setDate(new Date())
      setMethod('BoardPlus')
    }
  }, [isFocused])

  const disabled = !cost || Number.isNaN(parseFloat(cost))
  const costValidation = () => {
    if (Number.isNaN(parseFloat(cost))) {
      setCost('')
    }
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <MainView>
          <BackButton onPress={() => navigation.goBack()}>
            <BackIcon size={30} />
            <BackButtonText>Back</BackButtonText>
          </BackButton>

          {/* location selector, default to current location */}
          <HorizontalView style={{ zIndex: 3 }}>
            <PromptText>Location:</PromptText>
            <DropDownPicker
              containerStyle={styles.containerPicker}
              placeholder="Select a Location"
              placeholderStyle={{ color: 'gray' }}
              textStyle={styles.label}
              labelStyle={styles.label}
              open={open}
              value={location}
              items={formattedLocations}
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
            <PromptText>Cost of Purchase(s):</PromptText>
            <TextInput
              style={styles.input}
              value={`${cost}`}
              placeholder="$0"
              maxLength={5}
              inputMode="decimal"
              onChangeText={e => setCost(e)}
              hitSlop={inputHitSlop}
              returnKeyType="done"
              onSubmitEditing={costValidation}
              onBlur={costValidation}
            />
          </HorizontalView>

          {/* enter BP or CC or other */}
          <HorizontalView style={{ zIndex: 2 }}>
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
            <SubmitButton onPress={() => addPurchase()} disabled={disabled}>
              <SubmitButtonText>Submit</SubmitButtonText>
            </SubmitButton>
          </SubmitButtonRow>

        </MainView>
      </TouchableWithoutFeedback>
      <Footer navigation={navigation} current="TrackVisit" />
      <Header title="Track a Visit" />
    </>
  )
}

export default TrackVisit
