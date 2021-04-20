const { Schema, model } = require('mongoose');

const thingSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  // Мб какое-то поле для доступа?*: {
  //   type: String,
  //   required: true,
  // },
});

module.exports = model('thing', thingSchema);
