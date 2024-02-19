// import { body } from "express-validator";
import produkModel from "../models/produkModel.js";


const ambilProduk = async (req, res) => {
    const {id} = req.params;
    const body = req;
  try {
    const [data] = await produkModel.getAllProduk (body, id);
    res.json({
        message: 'Successfull fetching produk',
        data: data
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  } 
};

const createNewProduk = async (req, res) => {
    const {id} = req.params;
    const body = req.body;
    
    try {
        await produkModel.createProduk(body, id);
        res.json({
            message: 'Successfull creating produk',
            data: body
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: 'Server error', 
            serverMessage: error,
        });
    }
}

const updateProduk = async (req, res) => {
    const {idProd} = req.params;
    const {body} = req;
    try {
        await produkModel.editProduk(body, idProd);
        res.json({
            message: "update success",
            data: body
    })
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: 'Server error', 
            serverMessage: error,
        });
    }
    console.log('id Produk:', idProd)
}


const deleteProduk = async (req, res) => {
    const {idProd} = req.params;
    const {body} = req;
    try {
        await produkModel.deleteProduk(body, idProd);
        res.json({
            message: "delete user success",
            data: body
        })
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: 'Server error', 
            serverMessage: error,
        });      
    }
}

const getProduk = async (req, res) => {
    const {id} = req.params;

    try {
        const [data] = await produkModel.getProduk(body, id);
        res.json({
            mesage: "get produk successfull",
            data: data
        })
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: 'Server error', 
            serverMessage: error,
        });       
    }
    console.log('id:', id)
}


const produkController = {
    ambilProduk,
    createNewProduk,
    updateProduk,
    deleteProduk,
    getProduk 
}

export default produkController;
