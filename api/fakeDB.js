const m = require('moment')
const holiConfigsResponse = require('./mocks/holiConfigs')
const eventsMDResponse = require('./mocks/eventsMD')
const eventsNMResponse = require('./mocks/eventsNM')
const placesResponse = require('./mocks/places')
const categoriesResponse = require('./mocks/categories')
const dates = require('./mocks/dates')
const holidays = require('./mocks/holidays')
const places = require('./mocks/places')
const entities = require('./mocks/entities')
const eventsByEntities = require('./mocks/eventsByEntities')
const hints = require('./mocks/hints')

const DEFAULT_ITEMS_PER_PAGE = 10

module.exports = {
  getHolidays: () => {
    return holidays
  },

  getHoliConfig: (holidayId) => {
    return holiConfigsResponse[holidayId]
  },

  getEvents: (params) => {
    let events = null

    params.page = ~~params.page
    params.itemsPerPage = ~~params.itemsPerPage

    if (params.holiId == 1) {
      events = eventsMDResponse
    }
    else {
      events = eventsNMResponse
    }

    if (params.entity) {
      if (eventsByEntities[params.holiId]) {
        events = eventsByEntities[params.holiId][params.entity]
      }
    }

    // filter by category: n^2 herovo, i know, it is just fake db with mocks
    if (params.category) {
      events = events.filter((item, idx) => {
        if (item.categories) {
          return !!item.categories.find((categoryItem) => categoryItem.id === params.category)
        }
        return false
      })
    }

    // filter by place
    if (params.place) {
      events = events.filter((item, idx) => {
        return item.place_id === params.place
      })
    }

    // filter by date[]=2017-09-09&date[]=2017-09-10&...
    // Not a range, but array like this: params.date = ['2017-09-09', '2017-09-10']
    if (params.date) {
      events = events.filter((item, idx) => {
        const eventDate = m(item.begin_time).utc().format('YYYY-MM-DD')
        return params.date.indexOf(eventDate) > -1
      })
    }

    // Order events by col
    if (params.orderCol) {
      const col = params.orderCol
      if (col === 'begin_time') {
        events.sort((a, b) => {
          return m(a[col]).unix() - m(b[col]).unix()
        })
      }
    }

    // Pagination/limits
    if (params.page) {
      const page = params.page === 0 ? 0 : params.page - 1
      const end = page + (params.itemsPerPage || DEFAULT_ITEMS_PER_PAGE)
      events = events.slice(page, end)
    } else {
      events = events.slice(0, params.itemsPerPage || DEFAULT_ITEMS_PER_PAGE)
    }

    // for tests
    // const newEvents = []
    // events.map(function (item) {
    //   newEvents.push({ "begin_time": item.begin_time, "title": item.title })
    // })

    return events || []
  },



  getEvent: (eventId, holidayId) => {
    if (holidayId === 1) {
      events = eventsMDResponse
    }
    else {
      events = eventsNMResponse
    }
    return events.filter((item) => {
      return item.id == eventId
    })
  },

  getDatesWithEvents: (holidayId) => {
    return dates[holidayId]
  },

  getCategories: (holidayId) => {
    return categoriesResponse[holidayId]
  },

  getPlaces: (params) => {
    let places = placesResponse[params.holiId]

    // Order events by col (now only by rating)
    if (params.orderCol) {
      const col = params.orderCol
      if (col === 'rating') {
        places.sort(function (a, b) {
          return b[col] - a[col]
        })
      }
    }

    places = places.slice(0, params.itemsPerPage || DEFAULT_ITEMS_PER_PAGE)

    return places
  },

  getPlace: (placeId, holidayId) => {
    if (places[holidayId]) {
      return places[holidayId].filter((item) => {
        return item.id == placeId
      })
    }
    return []
  },


  getEntities: (holidayId, category) => {
    if (entities[holidayId]) {
      return entities[holidayId][category] || []
    } else {
      return []
    }
  },

  getHint: (holidayId) => {
    const randId = Math.floor(Math.random() * hints[holidayId].length)
    return hints[holidayId][randId]
  }
}
