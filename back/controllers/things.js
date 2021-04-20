const Thing = require('../models/thing.js');

const BadRequestError = require('../errors/bad-req-err.js');
const NotFoundError = require('../errors/not-found-err.js');

const getThings = (req, res, next) => {
  Thing.find({})
    .then((data) => {
      if (data.length === 0) {
        throw new NotFoundError('Вещи не найдены');
      }
      return res.send(data);
    })
    .catch(next);
};

const getThing = (req, res, next) => {
  Thing.findById(req.params.id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Нет вещи с таким id');
      }
      return res.send(user);
    })
    .catch(next);
};

const createThing = (req, res, next) => {
  const {
    name,
  } = req.body;
  Thing.create({
    name,
  })
    .then((thing) => res.send({
      data: {
        name: thing.name,
      },
    }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new BadRequestError('Переданы некорректные данные');
      } else {
        next(err);
      }
    })
    .catch(next);
};

const deleteThing = (req, res, next) => {
  Thing.findById(req.params.id)
    .then((article) => {
      if (!article) {
        throw new NotFoundError('Карточка с таким id не найдена');
      }
      return Thing.findByIdAndRemove(req.params.id)
        .then(() => {
          res.send({ message: 'Вещь успешно удалена' });
        })
        .catch(next);
    })
    .catch(next);
};

module.exports = {
  getThings,
  getThing,
  createThing,
  deleteThing,
};
