import React from 'react'
import { View } from 'react-native'
import { Circle, Path, Svg } from 'react-native-svg'

const ListIcon = ({
  color = 'white',
  style,
  width = 36,
  height = 36,
  scalar = 1,
}) => (
  <View style={style}>
    <Svg width={width * scalar} height={height * scalar} xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
      <Path fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M160 144h288M160 256h288M160 368h288" />
      <Circle cx="80" cy="144" r="16" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
      <Circle cx="80" cy="256" r="16" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
      <Circle cx="80" cy="368" r="16" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
    </Svg>
  </View>
)

export default ListIcon
