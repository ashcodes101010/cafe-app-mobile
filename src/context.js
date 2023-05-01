import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useLazyQuery, useQuery } from '@apollo/client'
import * as SplashScreen from 'expo-splash-screen'
import { VIEWER } from './viewer'
import { GET_CAFES } from './screens/Main/graphql'

export const Context = React.createContext()

// Keep splash screen visible while fetch viewer
SplashScreen.preventAutoHideAsync()

export const ContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null)
  const [isSignedIn, setIsSignedIn] = useState(undefined)
  const [initial, setInitial] = useState(true)

  const { data, loading, refetch } = useQuery(VIEWER, {
    notifyOnNetworkStatusChange: true,
    onCompleted: async () => {
      if (data.viewer) {
        setIsSignedIn(true)
      } else {
        setIsSignedIn(false)
      }
      if (initial) {
        setInitial(false)
        await new Promise(() => setTimeout(async () => SplashScreen.hideAsync(), 1000))
      }
    },
  })

  const [getCafes, { data: cafeData }] = useLazyQuery(GET_CAFES, {
    fetchPolicy: 'cache-and-network',
    notifyOnNetworkStatusChange: true,
  })

  const viewer = { ...data, loading, refetch }

  const logOut = () => {
    AsyncStorage.removeItem('token')
    setIsSignedIn(false)
    refetch()
  }

  useEffect(() => {
    // Get geolocation in 15 second interval
    const getLocation = async () => {
      await Location.requestForegroundPermissionsAsync()
      const lastLoc = await Location.getLastKnownPositionAsync({})
      setLocation(lastLoc.coords)
      const loc = await Location.getCurrentPositionAsync({})
      if (lastLoc.coords !== loc.coords) {
        setLocation(loc.coords)
      }

      await Location.watchPositionAsync({
        accuracy: Location.Accuracy.Balanced,
        distanceInterval: 50,
        timeInterval: 15000,
      }, l => setLocation(l.coords))
    }
    getLocation()
  }, [])

  return (
    <Context.Provider value={{
      cafeData,
      isSignedIn,
      location,
      locations: cafeData?.getLocations || [],
      logOut,
      getCafes,
      viewer,
    }}
    >
      {children}
    </Context.Provider>
  )
}
