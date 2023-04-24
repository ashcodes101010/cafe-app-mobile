/* eslint-disable react/style-prop-object */
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { ScrollView } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import theme from './src/theme'
import { ContextProvider } from './src/context'
import RootNavigator from './src/navigation/RootNavigator'
import client from './client'

ScrollView.defaultProps = {
  indicatorStyle: 'black',
}

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <ContextProvider>
            <RootNavigator />
            <StatusBar style="light" />
          </ContextProvider>
        </ThemeProvider>
      </ApolloProvider>
    </NavigationContainer>
  </SafeAreaProvider>
)

export default App
