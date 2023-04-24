import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Main from '../screens/Main'
import BoardPlusTracker from '../screens/BoardPlusTracker'

const RootNavigator = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="BoardPlusTracker" component={BoardPlusTracker} />
    </Stack.Navigator>
  )
}

export default RootNavigator
