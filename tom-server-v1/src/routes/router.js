const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const router = express.Router();

const Thing = require('../models/User');


router.post('/', (req, res, next) => {
  delete req.body._id;
  const thing = new Thing({
      ...req.body
  });
  thing.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
});

router.put('/:id', (req, res, next) => {
  Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
});

router.delete('/:id', (req, res, next) => {
  Thing.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));
});


router.get('/:id', (req, res, next) => {
  Thing.findOne( { _id: req.params.id } )
    .then(thing => res.status(200).json(thing))
    .catch(error => res.status(404).json({ error }));
});

// https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg
router.get('/api/stuff', (req, res, next) => {
  Thing.find()
      .then(things => res.status(200).json(things))
      .catch(error => res.status(400).json({ error }));
});

/* code d'avant les routes api
router.get('/', (req, res) => {
  res.send({ response: "Server is up and running." })
    .status(200);
});
*/

module.exports = router;
