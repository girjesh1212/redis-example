const express = require('express');
const router = express.Router();
const { test, fetch } = require('../controllers/postCtrl');

router.get('/test', test);
router.get('/', fetch);

module.exports = router;
