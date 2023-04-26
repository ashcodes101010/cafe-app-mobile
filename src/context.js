/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useQuery } from '@apollo/client'
import * as SplashScreen from 'expo-splash-screen'
import { VIEWER } from './viewer'

export const Context = React.createContext()

// Keep splash screen visible while fetch viewer
SplashScreen.preventAutoHideAsync()

export const ContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null)
  const [isSignedIn, setIsSignedIn] = useState(undefined)
  const [initial, setInitial] = useState(true)
  const [locations, setLocations] = useState([])

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
      isSignedIn,
      location,
      locations,
      logOut,
      setLocations,
      viewer,
    }}
    >
      {children}
    </Context.Provider>
  )
}
