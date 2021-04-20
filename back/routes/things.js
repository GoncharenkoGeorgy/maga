const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getThings, getThing, createThing, deleteThing,
} = require('../controllers/things');
const auth = require('../middlewares/auth.js');

router.get('/things', auth, getThings);

router.get('/things/:id', auth, celebrate({
  params: Joi.object().keys({
    id: Joi.string().alphanum().length(24).hex(),
  }),
}), getThing);

router.delete('/things/:id', auth, celebrate({
  params: Joi.object().keys({
    id: Joi.string().alphanum().length(24).hex(),
  }),
}), deleteThing);

router.post('/things', auth, celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
}), createThing);

module.exports = router;
