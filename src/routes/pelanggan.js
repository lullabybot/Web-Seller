import express from 'express';
import pelangganController from '../controller/pelangganController.js';
import { body, validationResult } from 'express-validator';


const inputValidationMiddleware = [
    body('nama').isString().notEmpty(),
    body('notelp').isNumeric().notEmpty(),
    body('email').isEmail(),
    body('alamat').isString().notEmpty(),
    body('isActive').isBoolean().notEmpty()
  ];

const routerPelanggan = express.Router();


routerPelanggan.post('/', inputValidationMiddleware, pelangganController.createNewPelanggan)

routerPelanggan.get('/', pelangganController.ambilPelanggan)

routerPelanggan.patch('/:id', inputValidationMiddleware, pelangganController.updatePelanggan)

routerPelanggan.delete('/:id', pelangganController.deletePelanggan)

routerPelanggan.get('/:id', pelangganController.getPelanggan)

export default routerPelanggan;
