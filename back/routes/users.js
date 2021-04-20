const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  getLoginUser, login, createUser,
} = require('../controllers/users.js');
const auth = require('../middlewares/auth.js');

router.get('/users/me', auth, getLoginUser);

router.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required(),
    // email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
}), login);

router.post('/signup', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    secondName: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().required(),
    // email: Joi.string().required().email(),
    phone: Joi.string().required(),
    // phone: Joi.string().required().pattern(/^((\+7)+([0-9]){10})$/),не забыть потом
    // почекать валидацию
  }),
}), createUser);

module.exports = router;
