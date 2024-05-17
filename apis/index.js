const express = require('express');
const router = express.Router();
const vehicles = require('./vehicles');
const routes = require('./geoRoutes')

router.use('/vehicles', vehicles);
router.use('/georoute', routes);

module.exports = router;