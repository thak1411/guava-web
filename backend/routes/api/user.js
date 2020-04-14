const api = require('../../controllers');
const router = require('express').Router();

router.get('/user/:email', api.auth.login);
router.get('/test', api.test.test);

module.exports = router;