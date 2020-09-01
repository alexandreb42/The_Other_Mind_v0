require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { NOT_FOUND } = require("../helpers/status_code");
const User = require('../models/User');


exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        email: req.body.email,
        password: hash
      });
      user.save()
      // CREATED
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        // BAD_REQUEST
        .catch(error => res.status(400).json({ error }));
    })
    // SERVER_ERROR
    .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        // UNAUTHORIZED
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            // UNAUTHORIZED
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          // OK
          res.status(200).json({
            userId: user._id,
            token: jwt.sign(
              { userId: user._id },
              process.env.RANDOM_TOKEN_SECRET,
              { expiresIn: '24h' }
            )
          });
        })
        // SERVER_ERROR
        .catch(error => res.status(500).json({ error }));
    })
    // SERVER_ERROR
    .catch(error => res.status(500).json({ error }));
};