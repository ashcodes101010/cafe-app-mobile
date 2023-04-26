import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Main from '../screens/Main'
import BoardPlusTracker from '../screens/BoardPlusTracker'
import SignIn from '../screens/SignIn'
import { Context } from '../context'
import Profile from '../screens/Profile'

const RootNavigator = () => {
  const Stack = createStackNavigator()
  const { isSignedIn } = useContext(Context)

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
      {!isSignedIn
        ? <Stack.Screen name="SignIn" component={SignIn} />
        : (
          <>
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="BoardPlusTracker" component={BoardPlusTracker} />
            <Stack.Screen name="Profile" component={Profile} />
          </>
        )}
    </Stack.Navigator>
  )
}

export default RootNavigator
