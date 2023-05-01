import React, { useContext, useEffect, useState } from 'react'
import {
  Image, TouchableOpacity, View,
} from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { CAFE_IMAGES } from '../../../assets/cafeImages/constants'
import MapIcon from '../../../assets/icons/MapIcon'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import StaticRatingStars from '../../components/StaticRatingStars'
import { Context } from '../../context'
import theme from '../../theme'
import {
  compareHours, compareHoursLocations, distanceMiles, isLocationOpen,
} from '../../utils/helper'
import Map from './components/Map'
import { INIT_POS } from './components/Map/constants'
import {
  AddressText,
  Buttons,
  CafeContainer, CafeContainerRight, CafeName,
  hitSlop, MilesContainer, MilesText, MoreInfoButton, RatingContainer, RatingText, StyledScrollView,
  styles,
} from './styles'

const Main = ({ navigation }) => {
  const {
    location, locations, cafeData, getCafes,
  } = useContext(Context)
  const [showMap, toggleMap] = useState(false)
  const sortedLocations = location
    ? [...locations]
      .sort((a, b) => compareHoursLocations(a, b, location))
    : [...locations].sort((a, b) => compareHours(a, b))

  useEffect(() => {
    const loadData = async () => getCafes()
    loadData()
  }, [])

  return (
    <>
      <View>
        {!cafeData && (
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
            {sortedLocations.map(l => {
              const isOpen = isLocationOpen(l.hours)
              return (
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
                    {isOpen && <AddressText>Open Now!</AddressText>}
                    <RatingContainer>
                      <StaticRatingStars
                        rating={l.ratingInfo.avgRating}
                        style={{ marginBottom: 10 }}
                      />
                      <RatingText>{`(${l.ratingInfo.numReviews})`}</RatingText>
                    </RatingContainer>
                    <Buttons>
                      {!!location && isOpen && (
                      <MilesContainer>
                        <MilesText>
                          {`${distanceMiles(location.longitude, location.latitude, l.longitude, l.latitude)} mi`}
                        </MilesText>
                      </MilesContainer>
                      )}
                      {!isOpen && (
                      <MilesContainer closed>
                        <MilesText>
                          Closed
                        </MilesText>
                      </MilesContainer>
                      )}
                      <MoreInfoButton onPress={() => navigation.navigate('Cafe', { id: l.id })}>
                        <MilesText>
                          More info
                        </MilesText>
                      </MoreInfoButton>
                    </Buttons>
                  </CafeContainerRight>
                </CafeContainer>
              )
            })}
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
