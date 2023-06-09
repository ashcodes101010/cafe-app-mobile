import React from 'react'
import { Text, View } from 'react-native'
import { Circle, Path, Svg } from 'react-native-svg'

const MapIcon = ({
  color = 'white',
  style,
  width = 32,
  height = 32,
}) => (
  <View style={style}>
    <Svg width={width} height={height} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path fillRule="evenodd" clipRule="evenodd" d="M0.217987 1.09202C0 1.51984 0 2.0799 0 3.2V8.6318L36 5.35908V3.2C36 2.0799 36 1.51984 35.782 1.09202C35.5903 0.715695 35.2843 0.409734 34.908 0.217987C34.4802 0 33.9201 0 32.8 0H3.2C2.0799 0 1.51984 0 1.09202 0.217987C0.715695 0.409734 0.409734 0.715695 0.217987 1.09202ZM36 7.36732L25.0848 8.35961L30.2674 36H32.8C33.9201 36 34.4802 36 34.908 35.782C35.2843 35.5903 35.5903 35.2843 35.782 34.908C36 34.4802 36 33.9201 36 32.8V7.36732ZM28.2326 36L23.0841 8.5415L0 10.6401V32.8C0 33.9201 0 34.4802 0.217987 34.908C0.409734 35.2843 0.715695 35.5903 1.09202 35.782C1.51984 36 2.0799 36 3.2 36H28.2326ZM19 24.0588C19 28.7478 13.9507 31.9215 12.429 32.7715C12.1598 32.9219 11.8402 32.9219 11.571 32.7715C10.0493 31.9215 5 28.7478 5 24.0588C5 19.8235 8.39174 17 12 17C15.7333 17 19 19.8235 19 24.0588Z" fill={color} />
      <Circle cx="12" cy="24" r="2" fill={color} />
    </Svg>
    <Text style={{
      color: 'white',
      fontSize: 12,
      fontWeight: 600,
      marginTop: 2.5,
    }}
    >
      Map
    </Text>
  </View>
)

export default MapIcon
