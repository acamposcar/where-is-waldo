const express = require('express')
const router = express.Router()
const indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/levels', indexController.getLevels)
router.post('/levels/:levelId', indexController.updateRanking)

module.exports = router
