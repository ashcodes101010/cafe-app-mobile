import React, { useContext, useState, useRef } from 'react'
import {
  Keyboard, TextInput,
  TouchableOpacity, TouchableWithoutFeedback,
} from 'react-native'
import { useMutation } from '@apollo/client'
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
  HistoryText,
  Bottom,
} from './styles'
import EditIcon from '../../../assets/icons/EditIcon'
import { MAX_BALANCE } from '../BoardPlusTracker/constants'
import { UPDATE_BALANCE } from './graphql'

const Profile = ({ navigation }) => {
  const { logOut, viewer: { viewer, refetch } } = useContext(Context)

  const [boardPlus, updateBoardPlus] = useState(viewer.boardPlusBalance)
  const [editBoardPlus, toggleBoardPlusEdit] = useState(false)
  const boardPlusInputRef = useRef(null)

  const [updateBalance] = useMutation(UPDATE_BALANCE, {
    onCompleted: () => refetch(),
  })

  const onSubmitBoardPlus = () => {
    let numFloat = parseFloat(boardPlus)
    if (Number.isNaN(numFloat)) {
      updateBoardPlus(viewer.boardPlusBalance)
    } else {
      numFloat = Math.min(Math.max(0, numFloat), MAX_BALANCE)
      updateBoardPlus(numFloat)
      updateBalance({ variables: { boardPlusBalance: numFloat } })
    }
    toggleBoardPlusEdit(false)
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <MainView>
          <StyledView>
            <PromptText>
              Name
            </PromptText>
            <UserInfo>
              <UserInfoText numberOfLines={1}>
                {viewer.fullName}
              </UserInfoText>
            </UserInfo>
          </StyledView>
          <StyledView>
            <PromptText>
              Email
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
                value={`${boardPlus}`}
                placeholder={`Up to $${MAX_BALANCE}`}
                autoFocus
                maxLength={6}
                inputMode="decimal"
                onBlur={onSubmitBoardPlus}
                onChangeText={e => updateBoardPlus(e)}
                onSubmitEditing={onSubmitBoardPlus}
                returnKeyType="done"
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
          <Bottom>
            <TouchableOpacity
              hitSlop={hitSlop}
              onPress={() => navigation.navigate('PurchaseHistory')}
            >
              <HistoryText style={{ marginRight: 60 }}>Purchase History</HistoryText>
            </TouchableOpacity>
            <TouchableOpacity
              hitSlop={hitSlop}
              onPress={() => navigation.navigate('ReviewHistory')}
            >
              <HistoryText>Review History</HistoryText>
            </TouchableOpacity>
          </Bottom>
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
