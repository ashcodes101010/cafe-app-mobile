import React, { useContext, useState, useRef } from 'react'
import {
  Keyboard,
  Text, TextInput, TouchableOpacity, TouchableWithoutFeedback,
} from 'react-native'
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
  styles,
  hitSlop,
} from './styles'
import EditIcon from '../../../assets/icons/EditIcon'

const Profile = ({ navigation }) => {
  const { logOut, viewer: { viewer } } = useContext(Context)
  const [name, updateName] = useState(viewer.fullName)
  const [editName, toggleNameEdit] = useState(false)

  const [boardPlus, updateBoardPlus] = useState(viewer.boardPlusBalance)
  const [editBoardPlus, toggleBoardPlusEdit] = useState(false)
  const nameInputRef = useRef(null)
  const boardPlusInputRef = useRef(null)

  const onSubmitName = () => {
    toggleNameEdit(false)
    // TODO: add code to update name in server / db
  }

  const onSubmitBoardPlus = () => {
    // TODO: only allow entering numbers, and make sure value between 0 and 130
    toggleBoardPlusEdit(false)
    // TODO: add code to update boardplus in server / db
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <MainView>
          <StyledView>
            <PromptText>
              Name
            </PromptText>
            { editName ? (
              <TextInput
                ref={nameInputRef}
                style={styles.input}
                value={name}
                autoFocus
                onBlur={onSubmitName}
                onChangeText={e => updateName(e)}
                onSubmitEditing={onSubmitName}
              />
            )
              : (
                <UserInfo>
                  <UserInfoText numberOfLines={1}>
                    {name}
                  </UserInfoText>
                  <TouchableOpacity
                    hitSlop={hitSlop}
                    onPress={() => {
                      if (nameInputRef?.current) {
                        nameInputRef.current.focus()
                      }
                      toggleNameEdit(!editName)
                    }}
                  >
                    <EditIcon />
                  </TouchableOpacity>
                </UserInfo>
              )}
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
            {editBoardPlus ? (
              <TextInput
                ref={boardPlusInputRef}
                style={styles.input}
                value={boardPlus}
                autoFocus
                onBlur={onSubmitBoardPlus}
                onChangeText={e => updateBoardPlus(e)}
                onSubmitEditing={onSubmitBoardPlus}
              />
            )
              : (
                <UserInfo>
                  <UserInfoText numberOfLines={1}>
                    $
                    {boardPlus}
                  </UserInfoText>
                  <TouchableOpacity
                    hitSlop={hitSlop}
                    onPress={() => {
                      if (boardPlusInputRef?.current) {
                        boardPlusInputRef.current.focus()
                      }
                      toggleBoardPlusEdit(!editBoardPlus)
                    }}
                  >
                    <EditIcon />
                  </TouchableOpacity>
                </UserInfo>
              )}
          </StyledView>
          <Text />
          <Button onPress={() => logOut()}>
            <ButtonText>Log out</ButtonText>
          </Button>
        </MainView>
      </TouchableWithoutFeedback>
      <Footer navigation={navigation} current="Profile" />
      <Header title="Profile" />
    </>
  )
}

export default Profile
