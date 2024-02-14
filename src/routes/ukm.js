const express = require('express');
const ukmController = require('../controller/ukm.js')

const router = express.Router();

router.post('/', ukmController.createNewUkm)

router.get('/', ukmController.getAllUkm)

router.patch('/:id', ukmController.updateUkm)

router.delete('/:id', ukmController.deleteUkm)

router.get('/:id', ukmController.getToko)
module.exports = router
