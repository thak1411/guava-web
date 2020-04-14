const api = require('../../controllers');
const router = require('express').Router();

router.get('/user/:email', api.auth.login);

module.exports = router;