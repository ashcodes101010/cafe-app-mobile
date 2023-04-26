/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useQuery } from '@apollo/client'
import { VIEWER } from './viewer'

export const Context = React.createContext()

export const ContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null)
  const [isSignedIn, setIsSignedIn] = useState(undefined)
  const [initial, setInitial] = useState(true)

  const { data, loading, refetch } = useQuery(VIEWER, {
    notifyOnNetworkStatusChange: true,
    onCompleted: () => {
      if (initial) {
      // TODO: hide splash screen here so there's no flicker
        setInitial(false)
      }
      if (data.viewer) {
        setIsSignedIn(true)
      } else {
        setIsSignedIn(false)
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
        accuracy: Location.Accuracy.High,
        distanceInterval: 2,
        timeInterval: 15000,
      }, l => setLocation(l.coords))
    }
    getLocation()
  }, [])

  return (
    <Context.Provider value={{
      isSignedIn,
      location,
      logOut,
      viewer,
    }}
    >
      {children}
    </Context.Provider>
  )
}
