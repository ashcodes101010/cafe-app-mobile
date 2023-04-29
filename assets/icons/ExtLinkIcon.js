import React from 'react'
import { View } from 'react-native'
import {
  Line, Path, Polyline, Svg,
} from 'react-native-svg'
import theme from '../../src/theme'

const ExtLinkIcon = ({
  color = theme.colors.pressableBlue,
  style,
  width = 16,
  height = 16,
  scalar = 1,
}) => (
  <View style={style}>
    <Svg xmlns="http://www.w3.org/2000/svg" width={width * scalar} height={height * scalar} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
      <Path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <Polyline points="15 3 21 3 21 9" />
      <Line x1="10" y1="14" x2="21" y2="3" />
    </Svg>
  </View>
)

export default ExtLinkIcon
