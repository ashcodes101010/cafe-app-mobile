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

const daysOfWeek = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
]

const daysOfWeekAbbr = {
  sunday: 'Su',
  monday: 'M',
  tuesday: 'T',
  wednesday: 'W',
  thursday: 'Th',
  friday: 'F',
  saturday: 'Sa',
}

const timeSuffix = isPM => (isPM ? 'pm' : 'am')

// Format time interval given in military time
const formatTimeInterval = (startHr, startMin, endHr, endMin) => {
  const startPM = startHr >= 12
  const endPM = endHr >= 12
  let str = `${startHr % 12 ? (startHr % 12) : 12}`
  str += startMin ? `:${startMin < 10 ? 0 : ''}${startMin}` : ''
  str += `${startPM === endPM ? '' : timeSuffix(startPM)}-${endHr % 12 ? (endHr % 12) : 12}`
  str += endMin ? `:${endMin < 10 ? 0 : ''}${endMin}` : ''
  str += timeSuffix(endPM)
  return str
}

const formatDayInterval = week => {
  let start = ''
  let end = ''
  let potentialEndReached = false
  daysOfWeek.forEach(day => {
    if (week[day]) {
      if (!start || potentialEndReached) {
        start = daysOfWeekAbbr[day]
      } else {
        end = daysOfWeekAbbr[day]
      }
    }
    // Account for noncontiguous block of open days
    if (start && !week[day]) {
      potentialEndReached = true
    }
  })
  return start + (end ? `-${end}` : '')
}

export const formatCafeHours = hours => {
  let str = ''
  if (!hours.length) {
    return 'No hours available'
  }
  hours.forEach((h, i) => {
    if (h.hoursUncertain) {
      str = 'Variable hours'
    } else {
      str += i > 0 ? ', ' : ''
      str += `${formatDayInterval(h)} ${formatTimeInterval(h.openHour, h.openMin, h.closeHour, h.closeMin)}`
      str += h.extraInfo ? ` (${h.extraInfo})` : ''
    }
  })
  return str
}
