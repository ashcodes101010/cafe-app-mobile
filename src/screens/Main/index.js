/* eslint-disable no-nested-ternary */
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
  compareHours, compareHoursLocations,
  compareHoursRatings, distanceMiles, isLocationOpen,
} from '../../utils/helper'
import Map from './components/Map'
import { INIT_POS } from './components/Map/constants'
import {
  AddressText,
  Buttons,
  CafeContainer, CafeContainerRight, CafeName,
  hitSlop, MilesContainer, MilesText, MoreInfoButton, RatingContainer, RatingText, StyledScrollView,
  styles,
  TagText,
  HorizontalTagScroll,
  PressableTextTag,
  SortByText,
} from './styles'
import SortIcon from '../../../assets/icons/SortIcon'
import ListIcon from '../../../assets/icons/ListIcon'

const Main = ({ navigation }) => {
  const {
    location, locations, cafeData, getCafes,
  } = useContext(Context)
  const [showMap, toggleMap] = useState(false)
  const [sortBy, setSortBy] = useState('Distance')
  const [selectedTag, setSelectedTag] = useState('')
  const tags = ['Coffee', 'GrabnGo', 'Bakery', 'Lunch', 'Dinner', 'HotBreakfast', 'Grille', 'Alcohol']

  const sortedLocations = sortBy === 'Distance' ? (location
    ? [...locations]
      .sort((a, b) => compareHoursLocations(a, b, location))
    : [...locations].sort((a, b) => compareHours(a, b)))
    : [...locations].sort((a, b) => compareHoursRatings(a, b))

  const filteredLocations = sortedLocations.filter(l => l.tags?.includes(selectedTag))

  useEffect(() => {
    const loadData = async () => getCafes()
    loadData()
  }, [])

  const parseTags = tagList => {
    const tagsArr = tagList.split(',')
    tagsArr.forEach((tag, index) => {
      tagsArr[index] = `#${tag} `
    }, tagsArr)
    return tagsArr
  }

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
            navigation={navigation}
          />
        ) : (
          <StyledScrollView>
            <HorizontalTagScroll horizontal>
              {tags.map(tag => (
                <TouchableOpacity onPress={() => (selectedTag === tag ? setSelectedTag('') : setSelectedTag(tag))}>
                  <PressableTextTag style={selectedTag === tag ? styles.selectedTag : ''}>{`#${tag}`}</PressableTextTag>
                </TouchableOpacity>
              ))}
            </HorizontalTagScroll>
            {filteredLocations.map(l => {
              const isOpen = isLocationOpen(l.hours)
              return (
                <CafeContainer key={l.fullName}>
                  <Image
                    style={{ width: 150, height: '100%', borderRadius: 4 }}
                    source={CAFE_IMAGES[l.image][0]}
                    resizeMode="cover"
                    resizeMethod="resize"
                  />
                  <CafeContainerRight>
                    <CafeName>{l.fullName}</CafeName>
                    <TagText>{parseTags(l.tags)}</TagText>
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
        title="Cafés"
        Icons={() => (
          <>
            {!showMap && (
            <TouchableOpacity
              style={{ marginRight: -140 }}
              onPress={() => (sortBy === 'Distance'
                ? setSortBy('Rating')
                : setSortBy('Distance')
              )}
              hitSlop={hitSlop}
            >
              <SortIcon />
              <SortByText>{sortBy}</SortByText>
            </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => toggleMap(!showMap)} hitSlop={hitSlop}>
              {showMap ? <ListIcon /> : <MapIcon />}
            </TouchableOpacity>
          </>
        )}
      />
    </>
  )
}

export default Main
