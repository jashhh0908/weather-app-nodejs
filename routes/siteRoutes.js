const express = require('express');
const router = express.Router();

const showWeather = require('../controllers/siteController');


router.get('/:city', showWeather)

module.exports = router;