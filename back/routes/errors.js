const router = require('express').Router();
const NotFoundError = require('../errors/bad-req-err.js');

router.all('*', () => {
  throw new NotFoundError('Запрашиваемый ресурс не найден');
});

module.exports = router;
