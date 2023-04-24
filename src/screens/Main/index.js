import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import theme from '../../theme'
import { GET_CAFES } from './graphql'
import { StyledScrollView, styles } from './styles'

const Main = () => {
  const [locations, setLocations] = useState([])
  const { data, loading } = useQuery(GET_CAFES, {
    onCompleted: () => setLocations(data.getLocations),
  })

  return (
    <View>
      <Text>
        Food
      </Text>
      {loading && (
        <ActivityIndicator
          style={styles.loading}
          animating
          size="small"
          color={theme.colors.harvardCrimson}
        />
      )}
      <StyledScrollView>
        {locations.map(l => <Text>{l.fullName}</Text>)}
      </StyledScrollView>
    </View>
  )
}

export default Main
