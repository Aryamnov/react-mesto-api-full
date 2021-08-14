const mongoose = require('mongoose');
const validator = require('validator');

const ObjectId = require('mongodb').ObjectID;
// Опишем схему:
const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator: (value) => validator.isURL(value, { protocols: ['http', 'https'], require_protocol: true }),
      message: 'Передаваемый адрес должен быть ссылкой',
    },
  },
  owner: {
    type: ObjectId,
    required: true,
  },
  likes: {
    type: [ObjectId],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  __v: { type: Number, select: false },
});

// создаём модель и экспортируем её
module.exports = mongoose.model('card', cardSchema);
