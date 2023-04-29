import React from 'react'
import { Linking, Text } from 'react-native'
import ExtLinkIcon from '../../../assets/icons/ExtLinkIcon'
import theme from '../../theme'
import { hitSlop, styles } from './styles'

const ExternalLink = ({ link, style = {}, text = ' More info' }) => (
  <Text
    style={{ color: theme.colors.pressableBlue, ...style }}
    onPress={() => Linking.openURL(link)}
    hitSlop={hitSlop}
  >
    {text}
    <ExtLinkIcon style={styles.icon} />
  </Text>
)

export default ExternalLink
