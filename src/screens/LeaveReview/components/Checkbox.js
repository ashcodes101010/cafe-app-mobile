import * as React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Checkbox } from 'react-native-paper'
import theme from '../../../theme'

const CheckBox = ({ label, status, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    hitSlop={{
      top: 20, bottom: 20, left: 20, right: 20,
    }}
  >
    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
      <Text style={{ fontSize: 15, color: '#737373' }}>{label}</Text>
      <Checkbox status={status} color={theme.colors.harvardCrimson} />
    </View>
  </TouchableOpacity>
)

export default CheckBox
