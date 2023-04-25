import React, { useContext } from 'react'
import { Text } from 'react-native'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Context } from '../../context'
import {
  Button,
  ButtonText,
  MainView,
} from './styles'

const Profile = ({ navigation }) => {
  const { logOut, viewer: { viewer } } = useContext(Context)
  return (
    <>
      <MainView>
        <Text>
          Name:
          {' '}
          {viewer.fullName}
        </Text>
        <Text>
          Email:
          {' '}
          {viewer.email}
        </Text>
        <Text>
          BoardPlus Balance: $
          {viewer.boardPlusBalance}
        </Text>
        <Text />
        <Button onPress={() => logOut()}>
          <ButtonText>Log out</ButtonText>
        </Button>
      </MainView>
      <Footer navigation={navigation} current="Profile" />
      <Header title="Profile" />
    </>
  )
}

export default Profile
