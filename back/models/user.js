const { Schema, model } = require('mongoose');
// const isEmail = require('validator/lib/isEmail');
const bcrypt = require('bcryptjs');
// const isPhone = require('validator/lib/isMobilePhone');

const BadRequestError = require('../errors/bad-req-err.js');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  secondName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // validate: {
    //   validator: (v) => isEmail(v),
    //   message: 'Неправильный формат почты',
    // },
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    // validate: {
    //   validator: (v) => isPhone(v),
    //   message: 'Неправильный формат ',
    // },
  },
});

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        throw new BadRequestError('Неправильные почта или пароль');
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            throw new BadRequestError('Неправильные почта или пароль');
          }

          return user;
        });
    });
};

module.exports = model('user', userSchema);
