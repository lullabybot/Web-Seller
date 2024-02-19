import express from 'express';
import ukmController from '../controller/ukm.js';
import produkController from '../controller/produkController.js';
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

const inputValidation = [
  body('nama_barang').isString().notEmpty(),
  body('deskripsi').isNumeric(),
  body('satuan').isString().notEmpty(),
  body('harga_beli').isNumeric().notEmpty(),
  body('harga_jual').isNumeric().notEmpty()
  ];

const router = express.Router();


router.post('/', inputValidationMiddleware, ukmController.createNewUkm)

router.get('/', ukmController.getAllUkm)

router.patch('/:id', inputValidationMiddleware, ukmController.updateUkm)

router.delete('/:id', ukmController.deleteUkm)

router.get('/:id', ukmController.getToko)

router.post('/:id/produk', inputValidation, produkController.createNewProduk)

router.patch('/:id/produk/:idProd', inputValidation, produkController.updateProduk)

router.delete('/:id/produk/:idProd', inputValidation, produkController.deleteProduk)

router.get('/:id/produk', produkController.ambilProduk)
export default router;
