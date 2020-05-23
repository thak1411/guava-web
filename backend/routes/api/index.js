const User = require('./user.js');
const Util = require('./util.js');
const router = require("express").Router();

router.use(User);
router.use(Util);

module.exports = router;