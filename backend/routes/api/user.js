const api = require('../../controllers');
const router = require('express').Router();
const authMiddleware = require('../../middlewares/authMiddleware.js');

router.post('/user/join', api.auth.join);
router.post('/user/login', api.auth.login);
router.get('/user/info', authMiddleware.checkUser, api.user.info);
router.get('/user/list', authMiddleware.checkUser, api.user.userList);
router.get('/user/delete', authMiddleware.checkUser, api.user.deleteUser);

module.exports = router;