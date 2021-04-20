const router = require('express').Router();

const thingsRouter = require('./things');
const usersRouter = require('./users');
const errorRouter = require('./errors');

router.use('/', thingsRouter);
router.use('/', usersRouter);
router.use('/', errorRouter);

module.exports = router;
