const express = require('express');
const router = express.Router();
const { getHomeContent } = require('../controllers/homeController');

router.get('/content', getHomeContent);

module.exports = router;
