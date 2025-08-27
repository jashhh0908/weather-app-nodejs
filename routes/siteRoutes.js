const express = require('express');
const router = express.Router();

const showWeather = require('../controllers/siteController');


router.get('/weather', showWeather)

module.exports = router;