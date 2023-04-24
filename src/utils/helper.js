// Credit: https://cloud.google.com/blog/products/maps-platform/how-calculate-distances-map-maps-javascript-api
// haversine_distance
// Get the distance between two points given longitude and latitude
export const distanceMilesFloat = (lon1 = 0, lat1 = 0, lon2 = 0, lat2 = 0) => {
  const R = 3958.8 // Radius of the Earth in miles
  const rlat1 = lat1 * (Math.PI / 180) // Convert degrees to radians
  const rlat2 = lat2 * (Math.PI / 180) // Convert degrees to radians
  const difflat = rlat2 - rlat1 // Radian difference (latitudes)
  const difflon = (lon2 - lon1) * (Math.PI / 180) // Radian difference (longitudes)

  const d = (2 * R * Math.asin(Math.sqrt(Math.sin(difflat / 2) * Math.sin(difflat / 2)
    + Math.cos(rlat1) * Math.cos(rlat2) * Math.sin(difflon / 2) * Math.sin(difflon / 2))))

  return d
}

export const distanceMiles = (lon1, lat1, lon2, lat2) => {
  const d = distanceMilesFloat(lon1, lat1, lon2, lat2)
  return d < 1 ? d.toFixed(2) : d.toFixed(1)
}

// Comparison function for sorting locations by distance to geolocation
export const compareLocations = (a, b, location) => {
  const { latitude: lat1, longitude: lon1 } = a
  const { latitude: lat2, longitude: lon2 } = b
  const { longitude: lon, latitude: lat } = location
  return distanceMiles(lon1, lat1, lon, lat) - distanceMiles(lon2, lat2, lon, lat)
}
