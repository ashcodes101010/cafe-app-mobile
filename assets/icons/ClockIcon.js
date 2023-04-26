import React from 'react'
import { View } from 'react-native'
import { Path, Svg } from 'react-native-svg'

const ClockIcon = ({
  style,
  scalar = 1,
  width = 36,
  height = 36,
}) => (
  <View style={style}>
    <Svg width={width * scalar} height={height * scalar} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path fillRule="evenodd" clipRule="evenodd" d="M11.5 22.375C17.5061 22.375 22.375 17.5061 22.375 11.5C22.375 5.4939 17.5061 0.625 11.5 0.625C5.4939 0.625 0.625 5.4939 0.625 11.5C0.625 17.5061 5.4939 22.375 11.5 22.375ZM12.5 4.85417C12.5 4.30188 12.0523 3.85417 11.5 3.85417C10.9477 3.85417 10.5 4.30188 10.5 4.85417V11.25C10.5 11.9404 11.0596 12.5 11.75 12.5H15.7292C16.2815 12.5 16.7292 12.0523 16.7292 11.5C16.7292 10.9477 16.2815 10.5 15.7292 10.5H12.5V4.85417Z" fill="#23A6F0" />
    </Svg>
  </View>
)

export default ClockIcon
