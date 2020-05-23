const api = require('../../controllers');
const router = require('express').Router();

router.get('/cookie', api.util.cookie);

module.exports = router;