import React from 'react'
import { View } from 'react-native'
import { Circle, Path, Svg } from 'react-native-svg'
import theme from '../../src/theme'

const MarkerIcon = ({
  color = theme.colors.harvardCrimson,
  style,
  width = 36,
  height = 36,
}) => (
  <View style={style}>
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="#EA352B" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin">
      <Path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <Circle cx="12" cy="10" r="3.5" fill="#770000" />
    </Svg>
  </View>
)

export default MarkerIcon
