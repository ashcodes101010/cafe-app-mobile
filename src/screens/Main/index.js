import { useQuery } from '@apollo/client'
import React, { useContext, useState } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { CAFE_IMAGES } from '../../../assets/cafeImages/constants'
import MapIcon from '../../../assets/icons/MapIcon'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Context } from '../../context'
import theme from '../../theme'
import { compareLocations, distanceMiles } from '../../utils/helper'
import Map from './components/Map'
import { INIT_POS } from './components/Map/constants'
import { GET_CAFES } from './graphql'
import {
  AddressText,
  CafeContainer, CafeContainerRight, CafeName,
  hitSlop, MilesContainer, MilesText, StyledScrollView,
  styles,
} from './styles'

const Main = ({ navigation }) => {
  const { location } = useContext(Context)
  const [showMap, toggleMap] = useState(false)
  const [locations, setLocations] = useState([])
  const { data, loading } = useQuery(GET_CAFES, {
    onCompleted: () => setLocations(data.getLocations),
  })

  const sortedLocations = location
    ? [...locations].sort((a, b) => compareLocations(a, b, location))
    : locations

  return (
    <>
      <View>
        {loading && (
        <ActivityIndicator
          style={styles.loading}
          animating
          size="small"
          color={theme.colors.harvardCrimson}
        />
        )}
        {showMap ? (
          <Map
            initialRegion={{ ...INIT_POS, ...(location || {}) }}
            locations={locations}
          />
        ) : (
          <StyledScrollView>
            {sortedLocations.map(l => (
              <CafeContainer key={l.fullName}>
                <Image
                  style={{ width: 160, height: 120, borderRadius: 4 }}
                  source={CAFE_IMAGES[l.image][0]}
                  resizeMode="cover"
                  resizeMethod="resize"
                />
                <CafeContainerRight>
                  <CafeName>{l.fullName}</CafeName>
                  <AddressText>{l.shortAddress}</AddressText>
                  {!!location && (
                  <MilesContainer>
                    <MilesText>
                      {`${distanceMiles(location.longitude, location.latitude, l.longitude, l.latitude)} mi`}
                    </MilesText>
                  </MilesContainer>
                  )}
                </CafeContainerRight>
              </CafeContainer>
            ))}
          </StyledScrollView>
        )}
      </View>
      <Footer navigation={navigation} current="Main" />
      <Header
        title="Cafes"
        Icons={() => (
          <TouchableOpacity onPress={() => toggleMap(!showMap)} hitSlop={hitSlop}>
            <MapIcon />
          </TouchableOpacity>
        )}
      />
    </>
  )
}

export default Main
