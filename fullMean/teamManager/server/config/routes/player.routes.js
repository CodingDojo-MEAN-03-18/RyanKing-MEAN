const playerController = require('../../controllers/players');
const router = require('express').Router();

router
  .get('/', playerController.index)
  .post('/', playerController.create)
  .put('/:playerID', playerController.update)
  .delete('/:playerID', playerController.delete);

module.exports = router;
