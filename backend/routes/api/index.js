const User = require('./user.js');
const router = require("express").Router();

router.use(User);

module.exports = router;