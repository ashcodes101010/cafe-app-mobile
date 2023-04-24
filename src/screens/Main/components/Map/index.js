/* eslint-disable react/no-array-index-key */
import React, { useRef } from 'react'
import MapView, { Marker } from 'react-native-maps'
import MarkerIcon from '../../../../../assets/icons/MarkerIcon'

const Map = ({ initialRegion, locations }) => {
  const mapRef = useRef(null)

  return (
    <MapView
      ref={mapRef}
      initialRegion={initialRegion}
      style={{ height: '100%', width: '100%' }}
      showsUserLocation
      mapType="standard"
      rotateEnabled={false}
      pitchEnabled={false}
      minZoomLevel={12}
      maxZoomLevel={18}
    >
      {locations.map(({ longitude, latitude, fullName }, i) => (
        <Marker
          identifier="cafe"
          tracksViewChanges={false}
          key={i}
          coordinate={{ longitude, latitude }}
          title={fullName}
        >
          <MarkerIcon />
        </Marker>
      ))}
    </MapView>
  )
}

export default Map
