import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Main from '../screens/Main'
import BoardPlusTracker from '../screens/BoardPlusTracker'
import SignIn from '../screens/SignIn'
import { Context } from '../context'
import Profile from '../screens/Profile'
import Cafe from '../screens/Cafe'
import PurchaseHistory from '../screens/PurchaseHistory'
import ReviewHistory from '../screens/ReviewHistory'
import LeaveReview from '../screens/LeaveReview'
import TrackVisit from '../screens/TrackVisit'

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
            <Stack.Screen name="Cafe" component={Cafe} getId={({ params }) => (params ? params.id : 0)} />
            <Stack.Screen name="PurchaseHistory" component={PurchaseHistory} />
            <Stack.Screen name="ReviewHistory" component={ReviewHistory} />
            <Stack.Screen name="LeaveReview" component={LeaveReview} />
            <Stack.Screen name="TrackVisit" component={TrackVisit} />
          </>
        )}
    </Stack.Navigator>
  )
}

export default RootNavigator
