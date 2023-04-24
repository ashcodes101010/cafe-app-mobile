import {
  ApolloClient, HttpLink, InMemoryCache, ApolloLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Constants from 'expo-constants'

const { manifest } = Constants

const httpLink = new HttpLink({
  uri: `http://${manifest.debuggerHost.split(':').shift()}:5001/graphql`,
  credentials: 'include',
})

const afterwareLink = new ApolloLink((operation, forward) => forward(operation)
  .map(response => {
    const { response: { headers } } = operation.getContext()
    const token = headers.get('x-token')
    if (token) {
      AsyncStorage.setItem('token', token)
    }

    return response
  }))

const middlewareLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem('token')

  const newHeaders = token
    ? {
      ...headers,
      authorization: `Bearer ${token}`,
    } : {
      ...headers,
    }

  return {
    headers: newHeaders,
  }
})

const errorLink = onError(() => {})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([
    afterwareLink,
    middlewareLink,
    errorLink,
    httpLink,
  ]),
})

export default client
