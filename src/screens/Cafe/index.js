import React, { useContext, useState } from 'react'
import {
  Dimensions, Image, TouchableOpacity,
} from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import Carousel from 'react-native-reanimated-carousel'
import { useQuery } from '@apollo/client'
import { CAFE_IMAGES } from '../../../assets/cafeImages/constants'
import ClockIcon from '../../../assets/icons/ClockIcon'
import MapIcon from '../../../assets/icons/MapIcon'
import MarkerIcon from '../../../assets/icons/MarkerIcon'
import Review from './components/Review'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import StaticRatingStars from '../../components/StaticRatingStars'
import { Context } from '../../context'
import { formatCafeHours, isLocationOpen } from '../../utils/helper'
import {
  Body,
  DescText,
  hitSlop,
  IconText,
  MainView,
  OpenText,
  RatingContainer,
  RatingText,
  TextAndIcon,
  ReviewText,
  ReviewsContainerTop,
  StyledScrollView,
} from './styles'
import { GET_REVIEWS } from './graphql'

const { width } = Dimensions.get('window')

const Cafe = ({ navigation, route }) => {
  const { id } = route.params
  const { locations } = useContext(Context)
  const [showMap, toggleMap] = useState(false)
  const [reviews, setReviews] = useState([])
  const cafe = locations.find(c => c.id === id)

  const { data } = useQuery(GET_REVIEWS, {
    fetchPolicy: 'cache-and-network',
    variables: { locationId: id },
    onCompleted: () => setReviews(data.locationReviews),
  })

  const writtenReviews = reviews.filter(r => !!r.review)

  return (
    <>
      <MainView>
        {cafe ? (
          <>
            {showMap ? (
              <MapView
                initialRegion={{
                  longitude: cafe.longitude,
                  latitude: cafe.latitude,
                  latitudeDelta: 0.002,
                  longitudeDelta: 0.002,
                }}
                style={{ height: 220, width }}
                showsUserLocation
                mapType="standard"
                rotateEnabled={false}
                pitchEnabled={false}
                minZoomLevel={12}
                maxZoomLevel={18}
              >
                <Marker
                  identifier="cafe"
                  tracksViewChanges={false}
                  coordinate={{ longitude: cafe.longitude, latitude: cafe.latitude }}
                  title={cafe.fullName}
                >
                  <MarkerIcon />
                </Marker>
              </MapView>
            ) : (
              <Carousel
                loop
                width={width}
                height={220}
                autoPlay
                data={CAFE_IMAGES[cafe.image]}
                autoPlayInterval={7000}
                scrollAnimationDuration={2000}
                renderItem={({ item }) => (
                  <Image
                    style={{ width, height: 220 }}
                    source={item}
                    resizeMode="cover"
                    resizeMethod="resize"
                  />
                )}
              />
            )}
            <StyledScrollView>
              <Body>
                <TextAndIcon>
                  <MarkerIcon style={{ width: 35 }} />
                  <IconText>{cafe.shortAddress}</IconText>
                </TextAndIcon>
                <TextAndIcon>
                  <ClockIcon scalar={0.8} style={{ width: 35, alignItems: 'center' }} />
                  <IconText>{formatCafeHours(cafe.hours)}</IconText>
                  {isLocationOpen(cafe.hours) && <OpenText>Open Now!</OpenText>}
                </TextAndIcon>
                <DescText>{cafe.description}</DescText>
                <ReviewsContainerTop>
                  <ReviewText>Reviews</ReviewText>
                  <RatingContainer>
                    <StaticRatingStars rating={cafe.ratingInfo.avgRating} />
                    <RatingText>{`(${cafe.ratingInfo.numReviews})`}</RatingText>
                  </RatingContainer>
                </ReviewsContainerTop>
                {writtenReviews.map(r => <Review key={r.id} review={r} />)}
              </Body>
            </StyledScrollView>
          </>
        ) : <></>}
      </MainView>
      <Footer navigation={navigation} current="Main" />
      <Header
        title={cafe.fullName}
        Icons={() => (
          <TouchableOpacity onPress={() => toggleMap(!showMap)} hitSlop={hitSlop}>
            <MapIcon />
          </TouchableOpacity>
        )}
      />
    </>
  )
}

export default Cafe
