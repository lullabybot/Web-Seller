import express from 'express';
import ukmController from '../controller/ukm.js';
import { body, validationResult } from 'express-validator';
// import pelangganController from '../controller/pelangganController.js';


const inputValidationMiddleware = [
    body('nama').isString().notEmpty(),
    body('alamat').isString().notEmpty(),
    body('notelp').isNumeric().notEmpty(),
    body('email').isEmail(),
    body('pass').isString().notEmpty(),
    body('isActive').isBoolean().notEmpty()
  ];

const router = express.Router();


router.post('/', inputValidationMiddleware, ukmController.createNewUkm)

router.get('/', ukmController.getAllUkm)

router.patch('/:id', inputValidationMiddleware, ukmController.updateUkm)

router.delete('/:id', ukmController.deleteUkm)

router.get('/:id', ukmController.getToko)

export default router;
