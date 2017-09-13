const fakeDB = require('./fakeDB.js')
const m = require('moment')

/**
 * Реальные данные, но вшитые статично. см. ./mocks
 * 
 */

const ERROR_NOT_FOUND = -1000


module.exports = {
  getHolidays: getHolidays,
  getHoliConfig: getHoliConfig,
  getEvents: getEvents,
  getEvent: getEvent,
  getDatesWithEvents: getDatesWithEvents,
  getCategories: getCategories,
  getPlaces: getPlaces,
  getPlace: getPlace,
  getEntities: getEntities,
  getHint: getHint,
  getEntity: getEntity,
}

function getHolidays(req, res, next) {
  _responseSuccess(res, fakeDB.getHolidays())
}

function getHoliConfig(req, res, next) {
  const holiId = ~~req.query.holiday
  const data = fakeDB.getHoliConfig(holiId)
  _responseSuccess(res, data)
}

function getEvents(req, res, next) {
  const params = {}
  params['holiId'] = ~~req.query.holiday
  params['place'] = req.query.place
  params['category'] = req.query.category
  params['date'] = req.query.date
  params['page'] = req.query.page
  params['itemsPerPage'] = req.query.items_per_page
  params['orderCol'] = req.query.order_col
  params['orderMode'] = req.query.order_mode
  params['entity'] = req.query.entity

  let data = fakeDB.getEvents(params)
  // for test
  // let data = [
  //   {end_time: '2017-08-09'},
  //   {end_time: '2017-09-09 00:09'},
  //   {end_time: '2017-09-09 23:59'}
  // ]
  const todayMoment = m().utc()
  const today = todayMoment.unix()
  const yesterday = todayMoment.add(-1, 'days')

  data.length && data.map((item) => {
    const end_dt = m(item.end_time).utc().unix()
    
    // Is left?
    item.is_left = true // all is left
    // if (today > end_dt) {
    //   item.is_left = true
    // }
    item.photo_small = `http://io.yamblz.ru/i/events/${item.id}_small.jpg`
    item.photo_large = `http://io.yamblz.ru/i/events/${item.id}_large.jpg`

    return item
  })

  // is yesterday event then hide?
  // data = data.filter((item) => {
  //   return yesterday.unix() < m(item.end_time).utc().unix()
  // })
  _responseSuccess(res, data)
}

function getEvent(req, res, next) {
  const holiId = ~~req.query.holiday
  const eventId = req.query.id
  const data = fakeDB.getEvent(eventId, holiId)

  if (!data.length) {
    _responseError(res, {
      "msg": "Event not found",
      "code": ERROR_NOT_FOUND
    })
  }
  else {
    const today = m().utc().unix()
    const end_dt = m(data[0].end_time).utc().unix()
    
    // Is left?
    data[0].is_left = false
    if (today > end_dt) {
      data[0].is_left = true
    }

    data[0].photo_small = `http://io.yamblz.ru/i/events/${data[0].id}_small.jpg`
    data[0].photo_large = `http://io.yamblz.ru/i/events/${data[0].id}_large.jpg`

    _responseSuccess(res, data[0])
  }
}

function getDatesWithEvents(req, res, next) {
  const holiId = ~~req.query.holiday
  const data = fakeDB.getDatesWithEvents(holiId)
  _responseSuccess(res, data)
}

function getCategories(req, res, next) {
  const holiId = ~~req.query.holiday
  const data = fakeDB.getCategories(holiId)
  _responseSuccess(res, data)
}

function getPlaces(req, res, next) {
  const params = {}
  params['holiId'] = ~~req.query.holiday // @todo: for resolving mock file (not for production)
  params['itemsPerPage'] = req.query.items_per_page
  params['orderCol'] = req.query.order_col
  const data = fakeDB.getPlaces(params)
  _responseSuccess(res, data)
}


function getPlace(req, res, next) {
  const holiId = ~~req.query.holiday // @todo: for resolving mock file (not for production)
  const placeId = req.query.id
  const data = fakeDB.getPlace(placeId, holiId)

  if (!data.length) {
    _responseError(res, {
      "msg": "Place not found",
      "code": ERROR_NOT_FOUND
    })
  }
  else {
    _responseSuccess(res, data[0])
  }
}

function getEntities(req, res, next) {
  const holiId = ~~req.query.holiday
  const category = req.query.category
  data = fakeDB.getEntities(holiId, category)
  _responseSuccess(res, data)
}

function getEntity(req, res, next) {
  const holiId = ~~req.query.holiday
  const entityId = req.query.id
  const data = fakeDB.getEntity(entityId, holiId)

  if (!data.length) {
    _responseError(res, {
      "msg": "Entity not found",
      "code": ERROR_NOT_FOUND
    })
  }
  else {
    _responseSuccess(res, data[0])
  }
}

function getHint(req, res, next) {
  const holiId = ~~req.query.holiday
  data = fakeDB.getHint(holiId)
  _responseSuccess(res, data)
}

function _responseSuccess(res, data) {
  res.status(200).setHeader('Content-Type', 'application/json')
  res.json({
    "code": 200,
    "data": data,
  })
}

function _responseError(res, data) {
  res.status(404).setHeader('Content-Type', 'application/json')
  res.json({
    "error": data,
  })
}









