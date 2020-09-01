const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const gamesCtrl = require('../controllers/game');

router.get('/join', gamesCtrl.getAllGames);
router.post('/create', auth, gamesCtrl.createGame);
router.get('/game/:id', auth, gamesCtrl.getOneGame);
router.put('/:id', auth, gamesCtrl.modifyGame);
router.delete('/:id', auth, gamesCtrl.deleteGame);

module.exports = router;