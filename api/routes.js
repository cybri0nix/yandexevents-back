const express = require('express')
const router = express.Router()
const api = require('./api.js')

router.get('/holidays', api.getHolidays)
router.get('/holiconfig', api.getHoliConfig)

router.get('/events', api.getEvents)
router.get('/event', api.getEvent)

router.get('/dates', api.getDatesWithEvents)
router.get('/categories', api.getCategories)

router.get('/places', api.getPlaces)
router.get('/place', api.getPlace)

router.get('/entities', api.getEntities)
router.get('/entity', api.getEntity)

router.get('/hint', api.getHint)

module.exports = router;
