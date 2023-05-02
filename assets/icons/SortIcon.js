import React from 'react'
import { View } from 'react-native'
import { Path, Svg } from 'react-native-svg'

const SortIcon = ({
  color = 'white',
  style,
  width = 35,
  height = 35,
}) => (
  <View style={style}>
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
      <Path d="M5 17H11" stroke={color} stroke-width="6" stroke-linecap="round" />
      <Path d="M5 12H15" stroke={color} stroke-width="6" stroke-linecap="round" />
      <Path d="M5 7H19" stroke={color} stroke-width="6" stroke-linecap="round" />
    </Svg>
  </View>
)

export default SortIcon
