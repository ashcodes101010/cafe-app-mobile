/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'

export const Context = React.createContext()

export const ContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null)

  // Get geolocation in 15 second interval
  useEffect(() => {
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
    <Context.Provider value={{ location }}>
      {children}
    </Context.Provider>
  )
}
