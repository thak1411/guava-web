const api = require('../../controllers');
const router = require('express').Router();

router.post('/user/join', api.auth.join);
router.post('/user/login', api.auth.login);

module.exports = router;