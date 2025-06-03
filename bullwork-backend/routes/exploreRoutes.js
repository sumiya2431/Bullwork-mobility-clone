const express = require('express');
const router = express.Router();
const { getExploreProduct } = require('../controllers/exploreController');

router.get('/explore/:id', getExploreProduct);

module.exports = router;
