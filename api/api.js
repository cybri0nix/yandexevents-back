const fakeDB = require('./fakeDB.js')

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

  const data = fakeDB.getEvents(params)
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









