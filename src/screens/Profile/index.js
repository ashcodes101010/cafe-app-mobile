import React, { useContext, useState, useRef } from 'react'
import { Text, TextInput } from 'react-native'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Context } from '../../context'
import {
  Button,
  ButtonText,
  MainView,
  StyledView,
  UserInfoText,
  PromptText,
  UserInfo,
  styles
} from './styles'
import EditIcon from '../../../assets/icons/EditIcon'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Profile = ({ navigation }) => {
  const { logOut, viewer: { viewer } } = useContext(Context)
  const [name, updateName] = useState(viewer.fullName)
  const [editName, toggleNameEdit] = useState(false)

  const [boardPlus, updateBoardPlus] = useState(viewer.boardPlusBalance)
  const [editBoardPlus, toggleBoardPlusEdit] = useState(false)

  function onSubmitName() {
    toggleNameEdit(false);
    // TODO: add code to update name in server / db
  }

  function onSubmitBoardPlus() {
    // TODO: only allow entering numbers, and make sure value between 0 and 130
    toggleBoardPlusEdit(false);
    // TODO: add code to update boardplus in server / db
  }

  return (
    <>
      <MainView>
        <StyledView>
          <PromptText>
            Name
          </PromptText>
          { editName ? (<TextInput style={styles.input} value={name} autofocus={true} onChangeText={(e) => updateName(e)} onSubmitEditing={onSubmitName}/>)
          : (<UserInfo>
              <UserInfoText numberOfLines={1}>
                {name}
              </UserInfoText>
              <TouchableOpacity onPress={() => toggleNameEdit(!editName)}>
                <EditIcon/>
              </TouchableOpacity>
            </UserInfo>)}
        </StyledView>
        <StyledView>
          <PromptText>
            Email:
          </PromptText>
          <UserInfo>
            <UserInfoText numberOfLines={1}>
              {viewer.email}
            </UserInfoText>
          </UserInfo>
        </StyledView>
        <StyledView>
          <PromptText>
            BoardPlus Balance
          </PromptText>
          { editBoardPlus ? (<TextInput style={styles.input} value={boardPlus} autofocus={true} onChangeText={(e) => updateBoardPlus(e)} onSubmitEditing={onSubmitBoardPlus}/>)
          : (<UserInfo>
              <UserInfoText numberOfLines={1}>
                ${boardPlus}
              </UserInfoText>
              <TouchableOpacity onPress={() => toggleBoardPlusEdit(!editBoardPlus)}>
                <EditIcon/>
              </TouchableOpacity>
            </UserInfo>)}
        </StyledView>
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
