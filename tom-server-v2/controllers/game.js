const { NOT_FOUND } = require("../helpers/status_code");
const Game = require('../models/Game');


exports.getAllGames = (req, res, next) => {
  Game.find().then(
    (things) => {
      // OK
      res.status(200).json(things);
    }
  ).catch(
    (error) => {
      // BAD_REQUEST
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.createGame = (req, res, next) => {
  const thing = new Game({
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    userId: req.body.userId
  });
  thing.save().then(
    () => {
      // CREATED
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch(
    (error) => {
      // BAD_REQUEST
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getOneGame = (req, res, next) => {
  Game.findOne({
    _id: req.params.id
  }).then(
    (thing) => {
      // OK
      res.status(200).json(thing);
    }
  ).catch(
    (error) => {
      // NOT_FOUND
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyGame = (req, res, next) => {
  const thing = new Game({
    _id: req.params.id,
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    userId: req.body.userId
  });
  Game.updateOne({_id: req.params.id}, thing).then(
    () => {
      // CREATED
      res.status(201).json({
        message: 'Game updated successfully!'
      });
    }
  ).catch(
    (error) => {
      // BAD_REQUEST
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.deleteGame = (req, res, next) => {
  Game.deleteOne({_id: req.params.id}).then(
    () => {
      // OK
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      // BAD_REQUEST
      res.status(400).json({
        error: error
      });
    }
  );
};

