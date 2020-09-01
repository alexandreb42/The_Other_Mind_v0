const express = require('express');

const router = express.Router();

const stuffCtrl = require('../controllers/controller');


router.get('/', stuffCtrl.getAllUsers);
router.post('/', stuffCtrl.createUser);
router.get('/:id', stuffCtrl.getOneUser);
router.put('/:id', stuffCtrl.modifyUser);
router.delete('/:id', stuffCtrl.deleteUser);


// https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg

/* code d'avant les routes api
router.get('/', (req, res) => {
  res.send({ response: "Server is up and running." })
    .status(200);
});
*/

module.exports = router;
