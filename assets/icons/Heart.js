import React from 'react'
import { View } from 'react-native'
import { Path, Svg } from 'react-native-svg'

const Heart = ({
  style,
  width = 12,
  height = 10,
  scalar = 1,
  fill = false,
}) => (
  <View style={style}>
    <Svg width={width * scalar} height={height * scalar} viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      {!fill ? (
        <Path d="M6.00049 2.61641L5.15965 1.75571L5.15937 1.75542C4.95353 1.5458 4.70798 1.3793 4.43707 1.26564C4.16616 1.15198 3.87532 1.09344 3.58153 1.09344C3.28774 1.09344 2.9969 1.15198 2.72599 1.26564C2.45512 1.37928 2.2096 1.54575 2.00378 1.75533C1.5811 2.18447 1.34417 2.76265 1.34417 3.365C1.34417 3.96739 1.58113 4.5456 2.00386 4.97476L2.004 4.9749L5.889 8.90865L6.00028 9.02133L6.11156 8.90865L9.99656 4.9749L9.9967 4.97476C10.4194 4.5456 10.6564 3.96739 10.6564 3.365C10.6564 2.76273 10.4195 2.18462 9.99694 1.75549C9.79119 1.5457 9.54564 1.37909 9.27466 1.26543C9.00379 1.15182 8.71298 1.0934 8.41925 1.0936C8.41913 1.0936 8.41901 1.0936 8.4189 1.0936L8.41903 1.25C8.14474 1.24961 7.87319 1.30453 7.62061 1.41149C7.36803 1.51845 7.13962 1.67524 6.94903 1.8725M6.00049 2.61641L6.83696 1.7634L6.83736 1.763L6.94903 1.8725M6.00049 2.61641L6.83655 1.76383M6.00049 2.61641L6.83655 1.76383M6.94903 1.8725L6.83655 1.76383M6.94903 1.8725L6.83655 1.76383M6.52762 1.4501L6.5282 1.4495C6.7747 1.19812 7.0689 0.998478 7.39357 0.862289C7.71823 0.7261 8.06682 0.656102 8.4189 0.656401L8.41898 0.656401C8.77105 0.656498 9.11958 0.726686 9.44424 0.862874C9.76889 0.999057 10.0632 1.19851 10.31 1.4496C10.813 1.96172 11.0949 2.65088 11.0949 3.36875C11.0949 4.08662 10.813 4.77579 10.31 5.2879L6.00028 9.65241L1.6906 5.2879C1.69057 5.28786 1.69053 5.28783 1.6905 5.28779C1.1875 4.77569 0.905664 4.08657 0.905664 3.36875C0.905664 2.65091 1.18751 1.96178 1.69053 1.44967C1.93737 1.1987 2.2317 0.999376 2.55636 0.863317C2.88102 0.727258 3.22951 0.657186 3.58153 0.657186C3.93354 0.657186 4.28204 0.727258 4.6067 0.863317C4.93136 0.999376 5.22568 1.1987 5.47252 1.44967L5.47294 1.4501L5.88919 1.8701L6.00028 1.98218L6.11136 1.8701L6.52762 1.4501Z" fill="#E74040" stroke="#E74040" strokeWidth="0.3128" />
      ) : (
        <Path d="M8.4189 0.656401L8.41898 0.656401C8.77105 0.656498 9.11958 0.726686 9.44424 0.862874C9.7689 0.999061 10.0632 1.19852 10.31 1.44963C10.813 1.96174 11.0949 2.65089 11.0949 3.36875C11.0949 4.08656 10.8131 4.77567 10.3101 5.28777C10.31 5.28781 10.31 5.28786 10.31 5.2879L6.00028 9.65241L1.6906 5.2879C1.69057 5.28786 1.69053 5.28783 1.6905 5.28779C1.1875 4.77569 0.905664 4.08657 0.905664 3.36875C0.905664 2.65091 1.18751 1.96178 1.69053 1.44967C1.93737 1.1987 2.2317 0.999376 2.55636 0.863317C2.88102 0.727258 3.22951 0.657186 3.58153 0.657186C3.93354 0.657186 4.28204 0.727258 4.6067 0.863317C4.93136 0.999376 5.22568 1.1987 5.47252 1.44967L5.47294 1.4501L5.88919 1.8701L6.00028 1.98218L6.11136 1.8701L6.52762 1.4501L6.5282 1.4495C6.7747 1.19812 7.0689 0.998478 7.39357 0.862289C7.71823 0.7261 8.06682 0.656102 8.4189 0.656401Z" fill="#E74040" stroke="#E74040" strokeWidth="0.3128" />
      )}
    </Svg>
  </View>
)

export default Heart
