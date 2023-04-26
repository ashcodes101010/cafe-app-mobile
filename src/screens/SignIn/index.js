/* eslint-disable camelcase */
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import { CLIENT_ID, EXPO_CLIENT_ID } from '@env'
import React, { useContext, useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { DEV_SIGN_IN, SIGN_IN } from './graphql'
import GoogleIcon from '../../../assets/icons/GoogleIcon'
import {
  Button, ButtonText, Container, Title,
} from './styles'
import { Context } from '../../context'

WebBrowser.maybeCompleteAuthSession()

const SignIn = () => {
  const { viewer: { refetch } } = useContext(Context)
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: EXPO_CLIENT_ID,
    iosClientId: CLIENT_ID,
  })

  const [signIn] = useMutation(SIGN_IN)
  const [developerSignIn] = useMutation(DEV_SIGN_IN, {
    onCompleted: () => refetch(),
  })

  const getUserInfo = async token => {
    // eslint-disable-next-line no-undef
    await fetch(
      'https://www.googleapis.com/userinfo/v2/me',
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    ).then(async res => {
      const user = await res.json()
      const {
        email, family_name, given_name, name,
      } = user || {}
      signIn({
        variables: {
          input: {
            email,
            fullName: name,
            firstName: given_name,
            lastName: family_name,
          },
        },
        onCompleted: () => refetch(),
      })
    }).catch(() => {})
  }

  useEffect(() => {
    if (response?.type === 'success') {
      getUserInfo(response.authentication.accessToken)
    }
  }, [response])

  return (
    <Container>
      <Title>Crimson Cafes</Title>
      <Button
        disabled={!request}
        onPress={() => promptAsync()}
      >
        <GoogleIcon scalar={0.6} style={{ marginRight: 15 }} />
        <ButtonText>Sign in</ButtonText>
      </Button>
      <Button onPress={() => developerSignIn()}>
        <ButtonText>DEV SIGN IN</ButtonText>
      </Button>
    </Container>
  )
}

export default SignIn
